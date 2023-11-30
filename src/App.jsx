import { useState } from 'react'
import './App.css'
import AppBarDesktop from './components/AppBarDesktop'
import MainDashboard from './components/MainDashboard/MainDashboard'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {createTheme, ThemeProvider} from "@mui/material";
import ReactorDashboard from './components/ReactorDashboard/ReactorDashboard'
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
  const [reactorInfo, setReactorInfo] = useState([])
  const [reactor1Name, setReactor1Name] = useState("Reactor 1")
  const [reactor2Name, setReactor2Name] = useState("Reactor 2")
  const [reactor3Name, setReactor3Name] = useState("Reactor 3")
  const [reactor4Name, setReactor4Name] = useState("Reactor 4")

  return (
    <>
    <ThemeProvider theme={theme}>
      <AppBarDesktop />
      <Router>
        <Switch>
          <Route exact path="/">
            <MainDashboard />
          </Route>
          <Route  path={`/`}>
            <ReactorDashboard />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>

    </>
  )
}

export default App
