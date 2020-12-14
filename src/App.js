import "./App.css"
import React from "react"
import Home from "./Layout/Home"
import Join from "./Layout/Join"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ReactNotification from "react-notifications-component"
import "react-notifications-component/dist/theme.css"

import { JOIN, HOME, CREATE } from "./urls"

function App() {
  return (
    <React.Fragment>
      <ReactNotification />
      <Router>
        <Switch>
          <Route path={HOME} exact component={Home} />
          {/* <Route path={JOIN} exact component={Join} /> */}
          <Route path={JOIN + "/:id"} exact component={Join} />
          <Route path={CREATE} exact component={Join} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
