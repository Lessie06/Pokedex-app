import React from "react";
import "./styling/UpdatePokemon.css";
import {Redirect} from 'react-router-dom'

class UpdatePokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeName: "",
      changeType: "",
      changeMove: "",
      id: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editPokemon = async (e) => {
    e.preventDefault();
    let id = document.getElementById("id").value;
    let editName = document.getElementById("editName").value;
    let editType = document.getElementById("editType").value;
    let editMove = document.getElementById("editMove").value;
    console.log(editName, editType, editMove, id);

    // await this.setState({ id: document.getElementById("id").value });
    // await this.setState({
    //   changeName: document.getElementById("editName").value,
    // });
    // await this.setState({
    //   changeType: document.getElementById("editType").value,
    // });
    // await this.setState({
    //   changeMove: document.getElementById("editMove").value,
    // });

    let values = {
      id:id,
      changeName: editName,
      changeType: editType,
      changeMove: editMove,

    };
    console.log(values);

    fetch("http://localhost:5000/updatePokemon", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
     
    });
    alert("Pokemon has been updated")
    this.props.history.push("/Pokedex");
  };

  render() {
    return (
      <div>
        <div id="pokemon-edit">
          <img
            id="vaporeon"
            src="http://pngimg.com/uploads/pokemon/pokemon_PNG10.png"
          ></img>
          <h1 id="h1">Edit Pokemon: </h1>
          <form id="edit-form">
            <label>ID:</label>
            <br></br>
            <input id="id" type="number" onChange={this.handleChange}></input>
            <br></br>
            <br></br>
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
          <img
            id="gengar"
            src="http://pngimg.com/uploads/pokemon/pokemon_PNG29.png"
          ></img>
        </div>
      </div>
    );
  }
}

export default UpdatePokemon;
