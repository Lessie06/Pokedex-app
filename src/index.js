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
import Navbar from './Navbar';


import { withRouter, BrowserRouter, Route, Link, Switch } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import AddPokemon from "./AddPokemon";
import UpdatePokemon from "./UpdatePokemon";

ReactDOM.render(
  <BrowserRouter>
    <div>
      
      <Navbar />

      {/* Links to different components go here*/}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        
        <Route path="/SearchPage" component={SearchPage} />
        <Route path="/AddPokemon" component={AddPokemon}/>
        <Route path='/Pokedex' component={Pokedex}></Route>
        <Route path="/UpdatePokemon" component={UpdatePokemon}/>
        <Route path="/DeletePokemon" component={DeletePokemon} />

        {/* This is used for testing; Get rid of me */}
        {/* <Route path='/testNavbar' component={Navbar} /> */}
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
