

import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import { useSelector } from "react-redux";

//pages
import Error from "./hooks/Error/Error";
import Nav from "./hooks/Nav/Nav";
import Factorial from "./hooks/Factorial/Factorial";
import Projects from "./hooks/Projects/Projects";
import Requirements from "./hooks/Requirements/Requirements";

function App() {

  // redux ->
  const _error = useSelector(state => state.error)
  // <- redux


  return (
    <div>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Projects />
          </Route>
          <Route path="/factorial">
            <Factorial />
          </Route>
          <Route path="/requirements">
            <Requirements />
          </Route>
        </Switch>
      </div>
      {_error.message ? <Error /> : null}
    </div>
  );
}

export default App;
