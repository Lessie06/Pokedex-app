import React from 'react'
import { Component } from 'react'
import './styling/IndivPokemon.css'
import axios from 'axios'; 
class IndivPokemon extends Component {
    constructor(props) {
        super(props)

        //state goes here. 
        this.state = {

            isVisible: true
        }
    }

    

    handleEdit = () => {
        alert("You've clicked the edit button!")
        

    }

    handleDelete = (id) => {
        //alert("You've clicked the delete button!")
        
        
        if(isNaN(id)){
            this.setState({isVisible : false})
            return;
        }  

        axios.delete(`http://localhost:5000/deletePokemon/${id}`)
        .then((responce) => {
            if(id == this.props.id){
                this.setState({isVisible : false})
            }
        });

        
        
        //this.setState({isVisible : false})
        
    }

    render() {
        return ( 
        <div class='indiv_pokemon_wrapper'>

            {this.state.isVisible == true ?  <div class='card' key={this.props.id}>
                
                <h3>Im an indivdual pokemon</h3>
                <img src={this.props.image} id='indiv_pMon_image' class='indiv_pMon_img_contraints'/><br></br>
                {isNaN(this.props.id) ? <div></div> : <p>ID:  {this.props.id}</p>}
                <b>{this.props.name}</b>
                <p>{this.props.type}</p>
                <p>{this.props.move}</p>
                <p>{this.props.ability}</p>
                <p>Region: {this.props.region}</p>
                <form action="./UpdatePokemon">
                <button onClick={this.handleEdit} className='indiv_pMon_button indiv_pMon_button_right'>Edit</button>
                </form>
                <button className='indiv_pMon_button ' onClick={() => {this.handleDelete(this.props.id)}}>Delete</button>
                </div> : <div></div>
            }    
        </div>
        )
    }
}

export default IndivPokemon