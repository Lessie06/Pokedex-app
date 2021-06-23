import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import './Search.css'

//link to our components (imports)
import SearchPage from "./SearchPage";
import Home from './Home';
import Pokedex from './Pokedex'
import DeletePokemon from './DeletePokemon'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import AddPokemon from "./AddPokemon";
import UpdatePokemon from "./UpdatePokemon";

ReactDOM.render(
  <BrowserRouter>
    <div>
      {/* nav bar can go here */}
      <div id="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SearchPage">Search</Link>
          </li>
        </ul>
      </div>

      {/* Links to different components go here*/}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/SearchPage" component={SearchPage} />
        <Route exact path="/AddPokemon" component={AddPokemon}/>
        <Route path='/Pokedex' component={Pokedex}></Route>
        <Route exact path="/UpdatePokemon" component={UpdatePokemon}/>
        <Route exact path="/DeletePokemon" component={DeletePokemon} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
