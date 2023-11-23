import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppBarDesktop from './components/AppBarDesktop'
import MainDashboard from './components/MainDashboard'
import IndividualReactor from './components/IndividualReactor'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
// Please note that we will eventually create our own custom theme
// for the time being we will be using largely inline css to style our pages
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppBarDesktop />
      <Router>
        <Switch>
          <Route path="/">
            <MainDashboard />
          </Route>
          <Route>
            <IndividualReactor path="/IndividualReactor" />
          </Route>
        </Switch>
      </Router>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
