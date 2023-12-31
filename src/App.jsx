import { useEffect, useState, useRef } from 'react'
import './App.css'
import MainDashboard from './components/MainDashboard/MainDashboard'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material";
import ReactorDashboard from './components/ReactorDashboard/ReactorDashboard'
import Chart from 'chart.js/auto'

// Please note that we will eventually create our own custom theme
// for the time being we will be using largely inline css to style our pages

// For a general overview of the MUI API the following link is great too: https://www.youtube.com/watch?v=_W3uuxDnySQ&list=PLQg6GaokU5CyVrmVsYa9R3g1z2Tsmfpm-
// Of course, 

// The following constant is basically modifying the default theme of MUI to suit our purpose.
// This video does a great job explaining what's going on: https://www.youtube.com/watch?v=SUEkAOuQZTQ
// For example, MUI has a default size, color, font, etc for  any Typography elements where we pass
// h1 as a variant what we're doing here is redefining our what h1 means along with other variants
// Additionally, we are defining our own variants 


// following theme must be moved to it's own theme file eventually and imported here
const theme = createTheme({
  typography: {
    h1: {
      // for the title of the page: "React Simulator"
      fontSize: 30,
      fontWeight: "500"
    },
    h2: {
      // for the headers like "All Reactors"
      fontSize: 24,
      fontWeight: "500"
    },
    h3: {
      // for headers like the ones we find in our cards
      fontSize: 16,
      fontWeight: "200"
    },
    basicInfo: {
      // for text giving basic info (non-aggregate info)
      fontSize: "16px",
      fontWeight: "200"
    },
    aggregateInfo: {
      // for text giving aggregate info (avg temperature, total energy output)
      fontSize: "32px",
      fontWeight: "100",
    },
    // changes default button styling: no longer all caps, font size is 12px
    button: {
      textTransform: 'none',
      fontSize: "12px"
    },
  },
  palette: {
    primary: {
      // the dark blue
      main: "#0B3964",
      // the light blue
      light: "#BFD7EA",

    },
    secondary: {
      // the neon green
      main: "#E0FF4F",
      contrastText: '#0B3964'
    },
    emergency: {
      // the red 
      main: "#FF6663"
    },
    regularButton: {
      // main = neon green, dark = darker neon green for hover effect, contrastTest = dark blue for text color
      main: "#E0FF4F",
      dark: "#d4ff0c",
      contrastText: '#0B3964'
    },
    emergencyButton: {
      // main = pinkish red, dark = darker pinkish red, contrastTest = white for text color
      main: "#FF6663",
      dark: "#ff514e",
      contrastText: '#FFFFFF'
    },
    // undefined as of now these are the colors of the temperature levels
    safe: {
      main: "#BFD7EA"
    },
    warning: {
      main: "#FF6663"
    },
    danger: {
      main: "#FF6663"
    },
    meltdown: {
      main: "#000000"
    }
  },
  // This goes over theme style overrides: https://mui.com/material-ui/customization/theme-components/#theme-default-props
})


function App() {
  const [reactors, setReactors] = useState([])
  const [plantName, setPlantName] = useState("")
  const [avgTemps, setAvgTemps] = useState([])
  const [avgTemp, setAvgTemp] = useState([])
  const [tempsLists, setTempsLists] = useState([])
  const [totalOutput, setTotalOutput] = useState(0)
  const [reactorsStates, setReactorsStates] = useState({})
  let prevReactorsStates = useRef<Object>(0)

  //useParam
  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch("https://nuclear.dacoder.io/reactors?apiKey=b9d10dcab8f4dd45")
      const jsonData = await rawData.json()
      prevReactorsStates = reactorsStates
      setPlantName(jsonData.plant_name)

      const jsonReactorsData = await Promise.all(jsonData.reactors.map(async (reactor) => {
        const rawTempData = await fetch(`https://nuclear.dacoder.io/reactors/temperature/${reactor.id}?apiKey=b9d10dcab8f4dd45`)
        const tempData = await rawTempData.json()

        const rawCoolantData = await fetch(`https://nuclear.dacoder.io/reactors/coolant/${reactor.id}?apiKey=b9d10dcab8f4dd45`)
        const coolantData = await rawCoolantData.json()

        const rawOutputData = await fetch(`https://nuclear.dacoder.io/reactors/output/${reactor.id}?apiKey=b9d10dcab8f4dd45`)
        const outputData = await rawOutputData.json()

        const rawFuelLevel = await fetch(`https://nuclear.dacoder.io/reactors/fuel-level/${reactor.id}?apiKey=b9d10dcab8f4dd45`)
        const fuelLevelData = await rawFuelLevel.json()

        const rawReactorState = await fetch(`https://nuclear.dacoder.io/reactors/reactor-state/${reactor.id}?apiKey=b9d10dcab8f4dd45`)
        const reactorStateData = await rawReactorState.json()

        const rawRodState = await fetch(`https://nuclear.dacoder.io/reactors/rod-state/${reactor.id}?apiKey=b9d10dcab8f4dd45`)
        const rodStateData = await rawRodState.json()

        return {
          ...reactor,
          temperature: tempData.temperature,
          coolant: coolantData.coolant,
          output: outputData.output,
          fuelLevel: fuelLevelData.fuel,
          reactorState: reactorStateData.state,
          rodState: rodStateData.control_rods,
        }
      }))
      const totalOutputValue = jsonReactorsData.reduce((accumulator, reactor) => {
        const reactorOutput = reactor.output.amount || 0
        return accumulator + reactorOutput
      }, 0)
      setTotalOutput(totalOutputValue)


      const totalTemperature = jsonReactorsData.reduce((accumulator, reactor) => {
        const reactorTemperature = reactor.temperature.amount || 0
        return accumulator + reactorTemperature
      }, 0)


      const averageTemperature = jsonReactorsData.length > 0 ? totalTemperature / jsonReactorsData.length : 0
      setAvgTemps(prevAvgTemps => {
        let newList = [...prevAvgTemps, averageTemperature]
        if (newList.length > 600) {
          newList = newList.slice(-600)
          return newList;
        }
        else {
          return newList;
        }

      })

      setReactorsStates(jsonReactorsData.map( (reactor) => {
        return {id: reactor.id, name: reactor.name, status: reactor.temperature.status}
      }))

      // not to be confused with setAvgTemps which is a list of the average temperatures throughout time
      setAvgTemp(averageTemperature)
      setReactors(jsonReactorsData)
    }

    const interval = setInterval(fetchData, 2000)

    return () => clearInterval(interval)

  }, [])

  const reactorTempWarning = (reactorName) => {
    enqueueSnackbar(`${reactorName} ${reactorTempStatus}`, {variant: "error"})
  }

  // useEffect(() => {
  //   const danger = reactorsStates.reduce((accumulator, currentValue) => {
  //     if (filter)
  //       accumulator = true
  //     }
  //   );
  // }, [reactorsStates])


  console.log("reactors: ", reactors)
  console.log("prev reactor state: ", prevReactorsStates)
  console.log("reactor state: ", reactorsStates)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <MainDashboard plant_name={plantName} reactors={reactors} avgTemp={avgTemp} totalOutput={totalOutput} avgTemps={avgTemps} />
            </Route>
            <Route path={'/ReactorDashboard/:id'}>
              <ReactorDashboard reactors={reactors} tempsLists={tempsLists} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
