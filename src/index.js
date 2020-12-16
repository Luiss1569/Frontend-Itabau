import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Index from './pages/Index'
import Historia from './pages/Historia'
import Historia_Sorvete from './pages/Historia-Sorvete'
import Curiosidades from './pages/Historia-Sorvete/view'
import Lancamento from './pages/Lançamentos'
import Picoles from './pages/Picoles'
import Matriz from './pages/Matriz'
import Encontrar from './pages/Encontrar'
import Receitas from './pages/Receitas'
import Selos from './pages/Selos'
import Frutas from './pages/Frutas'
import Videos from './pages/Videos'
import Ingredientes from './pages/Ingredientes'
import Cidade from './pages/Cidade'
import Pesquisa from './pages/Pesquisa'
import Fotos from './pages/Fotos'
import Boleto from './pages/Boleto'

import Painel from './pages/Painel'
import PainelIndex from './pages/Painel/views'
import PainelMatriz from './pages/Painel/views/matriz'
import PainelLancamento from './pages/Painel/views/lancamento'
import PainelPesquisa from './pages/Painel/views/pesquisa'
import ClienteIndex from './pages/Painel/Clientes'
import ClienteCreate from './pages/Painel/Clientes/create'
import ClienteUpdate from './pages/Painel/Clientes/update'

import Organicos from './pages/Picoles/views/Organicos'
import Acucar from './pages/Picoles/views/Acucar'
import Naturais from './pages/Picoles/views/Naturais'
import Recheados from './pages/Picoles/views/Recheados'
   
import MassaPremium from './pages/MassaPremium'
import MTradicionais from './pages/MassaPremium/view/tradicionais'
import MAcucar from './pages/MassaPremium/view/acucar'
import MAcai from './pages/MassaPremium/view/acai'
import MVegano from './pages/MassaPremium/view/vegano'
import MTodos from './pages/MassaPremium/view/'

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/home" exact component={Index} />
      <Route path="/historia"  component={Historia} />
      <Route path="/historia-sorvete" component={Historia_Sorvete} />
      <Route path="/curiosidades" component={Curiosidades} />
      <Route path="/lancamentos" component={Lancamento} />
      <Route path="/picoles/organicos" exact component={Organicos} />
      <Route path="/picoles/acucar" exact component={Acucar} />
      <Route path="/picoles/naturais" exact component={Naturais} />
      <Route path="/picoles/recheados" exact component={Recheados} />
      <Route path="/picoles" component={Picoles} />
      <Route path="/encontrar" component={Encontrar} />
      <Route path="/receitas" component={Receitas} />
      <Route path="/selos" component={Selos} />
      <Route path="/frutas" component={Frutas} />
      <Route path="/videos" component={Videos} />
      <Route path="/ingredientes" component={Ingredientes} />
      <Route path="/cidade" component={Cidade} />
      <Route path="/matriz" component={Matriz} />
      <Route path="/opiniao" component={Pesquisa} />
      <Route path="/galeria" component={Fotos} />
      <Route path="/boletos" component={Boleto} />

      <Route path="/painel/cliente" exact component={ClienteIndex} />
      <Route path="/painel/cliente/create" exact component={ClienteCreate} />
      <Route path="/painel/cliente/:id/update" exact component={ClienteUpdate} />

      <Route path="/painel/home" exact component={PainelIndex} />
      <Route path="/painel/matriz" exact component={PainelMatriz} />
      <Route path="/painel/lancamentos" exact component={PainelLancamento} />
      <Route path="/painel/pesquisa" exact component={PainelPesquisa} />
      <Route path="/painel" component={Painel} />

        <Route path="/massa/tradicionais" exact component={MTradicionais} />
        <Route path="/massa/acucar" exact component={MAcucar} />
        <Route path="/massa/vegano" exact component={MVegano} />
        <Route path="/massa/acai" exact component={MAcai} />
        <Route path="/massa/all" exact component={MTodos} />
        <Route path="/massa" component={MassaPremium} />

      <Route path="/index.php/onde-encontrar">
        <Redirect to="/encontrar"/>
      </Route>
      <Route path="/index.php/sorvetes/picoles">
        <Redirect to="/picoles"/>
      </Route>
      <Route path="/index.php/a-itabau/nossa-historia">
        <Redirect to="/historia"/>
      </Route>
      <Route path="/index.php/sorvetes/massa-premium">
        <Redirect to="/massa"/>
      </Route>
      
      <Route path="*">
        <Redirect to="/home"/>
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
