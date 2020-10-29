import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import Index from './pages/Index'

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
  
      <Route path="/" exact component={Index} />

  </Router>,
  document.getElementById("root")
);
