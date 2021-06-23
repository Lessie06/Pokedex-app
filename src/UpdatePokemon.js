import React from "react";
import './styling/UpdatePokemon.css'

class UpdatePokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeName: "",
      changeType: "",
      changeMove: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editPokemon = (e) => {
    e.preventDefault();
    let editName = document.getElementById("editName").value;
    let editType = document.getElementById("editType").value;
    let editMove = document.getElementById("editMove").value;
    console.log(editName, editType, editMove);

    this.setState({ changeMove: document.getElementById("editName").value });
    this.setState({ changeType: document.getElementById("editType").value });
    this.setState({ changeMove: document.getElementById("editMove").value });
  };

  render() {
    return (
      <div>
        <div id="pokemon-edit">
        <img id="vaporeon" src="http://pngimg.com/uploads/pokemon/pokemon_PNG10.png"></img>
          <h1 id="h1">Edit Pokemon: </h1>
          <form id="edit-form">
            <label id="name"> Update Name: </label>
            <br></br>
            <input
              type="text"
              id="editName"
              onChange={this.handleChange}
            ></input>
            <br></br>
            <label id="name">Update type: </label>
            <br></br>
            <input
              type="text"
              id="editType"
              onChange={this.handleChange}
            ></input>
            <br></br>
            <label id="name">Update Move: </label>
            <br></br>
            <input
              type="text"
              id="editMove"
              onChange={this.handleChange}
            ></input>
            <br></br>
            <button onClick={this.editPokemon}>Update</button>
          </form>
          <img id="gengar"src="http://pngimg.com/uploads/pokemon/pokemon_PNG29.png"></img>
        </div>
        
      </div>
    );
  }
}

export default UpdatePokemon;
