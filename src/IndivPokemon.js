import React from 'react'
import { Component } from 'react'
import './styling/IndivPokemon.css'
import axios from 'axios'; 
class IndivPokemon extends Component {
    constructor(props) {
        super(props)

        //state goes here. 
    }

    

    handleEdit = () => {
        alert("You've clicked the edit button!")
        

    }

    handleDelete = () => {
        alert("You've clicked the delete button!")
    }

    render() {
        return (<div class='indiv_pokemon_wrapper'>
            <div class='card'>
                
                <h3>I'm an individual pokemon</h3>
                <img src={this.props.image} id='indiv_pMon_image' class='indiv_pMon_img_contraints'/><br></br>
                <b>{this.props.name}</b>
                <p>{this.props.type}</p>
                <p>{this.props.move}</p>
                <p>{this.props.ability}</p>
                <p>Region: {this.props.region}</p>
                <form action="./UpdatePokemon">
                <button onClick={this.handleEdit} className='indiv_pMon_button indiv_pMon_button_right'>Edit</button>
                </form>
                <button className='indiv_pMon_button ' onClick={this.handleDelete}>Delete</button>
            </div>
        </div>
        )
    }
}

export default IndivPokemon