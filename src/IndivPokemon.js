import React from 'react'
import {Component} from 'react'


class IndivPokemon extends Component {
    constructor(props){
        super(props)

        //state goes here. 
    }

    handleEdit = () => {
        alert("You've clicked the edit button!")
    }

    handleDelete = () => {
        alert("You've clicked the delete button!")
    }

    render(){
       return( <div class='indiv_pokemon_wrapper'>
                <h1>I'm an individual pokemon</h1>
                <b>{this.props.name}</b>
                <p>{this.props.type}</p>
                <p>{this.props.move}</p>
                <p>{this.props.ability}</p>
                <p>Region: {this.props.region}</p>
                <button onClick={this.handleEdit}>Edit</button><button onClick={this.handleDelete}>Delete</button>
            </div>
       )
    }
}

export default IndivPokemon