import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import Index from './pages/Index'
import Historia from './pages/Historia'

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
  
      <Route path="/" exact component={Index} />
      <Route path="/historia" exact component={Historia} />

  </Router>,
  document.getElementById("root")
);
