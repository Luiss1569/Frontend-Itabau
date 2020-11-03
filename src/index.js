import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import Index from './pages/Index'
import Historia from './pages/Historia'
import Historia_Sorvete from './pages/Historia-Sorvete'
import Lancamento from './pages/Lançamentos'
import Picoles from './pages/Picoles'
import MassaPremium from './pages/MassaPremium'
import Encontrar from './pages/Encontrar'
import Receitas from './pages/Receitas'
import Selos from './pages/Selos'

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
  
      <Route path="/" exact component={Index} />
      <Route path="/home" exact component={Index} />
      <Route path="/historia" exact component={Historia} />
      <Route path="/historia-sorvete"  component={Historia_Sorvete} />
      <Route path="/lancamentos"  component={Lancamento} />
      <Route path="/picoles"  component={Picoles} />
      <Route path="/massa"  component={MassaPremium} />
      <Route path="/encontrar"  component={Encontrar} />
      <Route path="/receitas"  component={Receitas} />
      <Route path="/selos"  component={Selos} />


  </Router>,
  document.getElementById("root")
);
