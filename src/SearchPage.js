import React from "react";
import "./Search.css";
import axios from "axios";
import Search from "./Search";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      sprite: [],
      // url: "https://pokeapi.co/api/v2/pokemon/",
      // pokemon:null
      name: "",
      type: [],
      abilities: [],
    };
  }

  //API call goes here

  pokemonSearch = (e) => {
    e.preventDefault();

    let userInput = document.getElementById("search-input").value.toLowerCase();
    console.log(userInput);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/` + userInput)
      // .then(response => response.data)
      .then((response) => {
        console.log(response);
        this.setState({
          loading: false,

          name: response.data.name,
          sprite: response.data.sprites.front_default,
          type: response.data.types,
          abilities: response.data.abilities,
        });
        console.log(this.state.type);
      })
      .catch((error) => console.log(error));
  };

  render() {
    let display = (
      <div>
        <h3> {this.state.name}</h3>
        <img src={this.state.sprite}></img>
        {/* <h3> {this.state.abilities} </h3> */}
        <h3> </h3>
        <h3></h3>
      </div>
    );

    // let ability = this.state.abilities.map((i) => {<p> {i}</p>})
    let items = [];
    items = this.state.abilities.map((ability, i) => (
      <Search key={i} name={ability.ability.name} />
    ));
    console.log(items);

    let type = [];
    type = this.state.type.map((type, i) => (
      <Search key={i} name={type.type.name} />
    ));

    return (
      <div>
        <div id="pokemon-search">
          <img
            id="piplup"
            src="http://pngimg.com/uploads/pokemon/pokemon_PNG85.png"
          ></img>
          <h1 id="search-h1">Search Pokémon</h1>
          {/* <img id="pokedex-img"  src="https://img.rankedboost.com/wp-content/uploads/2017/09/Pokemon-GO-GEN-4-Pokedex.png"></img> */}

          <form id="search">
            <label>Search for Pokemon: </label>
            <br></br>
            <br></br>
            <input
              id="search-input"
              placeholder="pokemon name"
              type="text"
            ></input>
            <br></br>
            <button id="search-button" onClick={this.pokemonSearch}>
              Submit
            </button>
          </form>

          <div id="pokemon-cards">
            {display}
            <p>{type}</p>
            <p> {items}</p>
          </div>
          <img
            id="cyndaquill"
            src="http://pngimg.com/uploads/pokemon/pokemon_PNG49.png"
          ></img>
        </div>
      </div>
    );
  }
}

export default SearchPage;
