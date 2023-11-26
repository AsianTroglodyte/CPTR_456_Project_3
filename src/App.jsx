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

const theme = createTheme({
  typography: {
      h1: {
        // for the title of the page: "React Simulator"
        fontSize: 30,
      },
      h2: {
        // for the sub-titles like "All Reactors"
        fontSize: 24,
      },
      h3: {
        // for titles like the ones we find in our cards
        fontSize: 16,
      },
      // makes button Text not completely uppercase
      button: {
        textTransform: 'none'
      },
      basicInfo: {
        // for text giving basic info (non-aggregate info)
        fontSize: "16px", 
        fontWeight: "200"
      },
      aggregateInfo: {
        // for text giving aggregate info (avg temperature, total energy output)
        fontSize: "32px", 
        fontWeight: "100"
      }
  },
  palette: {
    primary: {
      // the dark blue
      main: "#0B3964",
      // the light blue
      light: "BFD7EA"
    },
    secondary: {
      // the neon green
      main: "#E0FF4F"
    },
    emergency: {
      // the red 
      main: "#FF6663"
    },
    regularButton: {
      main: "#E0FF4F",
      dark: "#c1ea00",
    },
    emergencyButton: {
      main: "#FF6663",
      dark: "#ff5f5c",
    },
  }
})

function App() {
  const [reactorInfo, setReactorInfo] = useState([])

  return (
    <>
    <ThemeProvider theme={theme}>
      <AppBarDesktop />
      <Router>
        <Switch>
          <Route exact path="/">
            <MainDashboard />
          </Route>
          <Route  path="/ReactorDashboard">
            <ReactorDashboard />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>

    </>
  )
}

export default App
