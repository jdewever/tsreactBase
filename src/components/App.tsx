import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "../pages/Home"
import Leaderboards from "../pages/Leaderboards"

import Navbar from "./Navbar"

import "../sass/App.sass"
import NotFound from "../pages/NotFound"

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/leaderboards">
            <Leaderboards />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
)

export default App
