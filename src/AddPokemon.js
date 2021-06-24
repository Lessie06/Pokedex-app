import axios from "axios";
import React from "react";
import IndivPokemon from "./IndivPokemon.js";
import "./AddPokemon.css";
import { Redirect } from "react-router-dom";

class AddPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeName: "",
      pokeType: "",
      pokeMove: "",
      listOfPokemon: [],
      successful: null,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleShowPokemon = this.handleShowPokemon.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAddPokemon = async (e) => {
    e.preventDefault();
    let name = document.getElementById("pokeName").value;
    let type = document.getElementById("pokeType").value;
    let move = document.getElementById("pokeMove").value;
    //console.log(name, type, move);

    this.setState({
      pokeName: document.getElementById("pokeName").value,
      pokeType: document.getElementById("pokeType").value,
      pokeMove: document.getElementById("pokeMove").value,
      
    });

    let values = this.state;

    //console.log(values);

    (async () => {
      //console.log(values);
      const rawResponse = await fetch("http://localhost:5000/addPokemon", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(values),
      });

      const content = await rawResponse.json();

      //console.log(content);
      this.props.history.push('/Pokedex')
    })();

    alert("You've added the pokemon to the database");
    //A redirect should occur now.

    

  };

  

  render() {
    

     if (this.state.successful) {
      return <Redirect to={this.state.successful} />
    }
    return (
      <div>
        <div id="pokemon-add">
          <img
            id="squirtle"
            src="http://static.pokemonpets.com/images/monsters-images-800-800/7-Squirtle.png"
          ></img>
          <h1 id="h1">Add Pokemon</h1>

          <form id="add-pokemon">
            <label id="name">Pokemon Name: </label>
            <br></br>
            <input
              type="text"
              id="pokeName"
              onChange={this.handleChange}
            ></input>
            <br></br>
            <label id="name"> Type: </label>
            <br></br>
            <input
              id="pokeType"
              type="text"
              onChange={this.handleChange}
            ></input>
            <br></br>
            <label id="name">Move: </label>
            <br></br>
            <input
              id="pokeMove"
              type="text"
              onChange={this.handleChange}
            ></input>
            <br></br>
            <br></br>

            

              <button onClick={this.handleAddPokemon}>Submit</button>
           
            {/* {this.state.successful ? <Redirect to="/Pokedex" /> : <null />} */}
           
            {/* {console.log(this.state.successful)} */}
            <br></br>
          </form>

          <img
            id="chikorita"
            src="http://pngimg.com/uploads/pokemon/pokemon_PNG45.png"
          ></img>
        </div>

        {/* <div className='show_pokemon_wrapper'>
          <button onClick={this.handleShowPokemon} className='addpokemon_button'>Howdy</button>
          <div className='item_containing_pokemon'> */}
        {/* {items} */}
        {/* </div>
        </div> */}
      </div>
    );
  }
}

export default AddPokemon;
