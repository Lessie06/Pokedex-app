import React from 'react'
import { Component } from 'react'
import IndivPokemon from './IndivPokemon'
import './styling/Pokedex.css'
import './AddPokemon.js';
import axios from 'axios';



class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state={
            listOfPokemon:[]
        }
        this.handleShowPokemon = this.handleShowPokemon.bind(this);
    }


     handleShowPokemon() {
         axios.get('http://localhost:5000/getAllPokemon')
        .then((response) => {
          console.log(response.data.rows)
        //   await response.data.rows
            
         this.setState({listOfPokemon : response.data.rows})
        });
      }





    render() {

    let items = []
    items = this.state.listOfPokemon.map((element) => (
      
      <IndivPokemon name={element.pokename} type={element.type} move={element.move} />

    ));
        return (<div className='pokedex_wrapper'>

            <img id='pokedx_pokeball' className='pdex_banner floatLeft' src='https://www.pngkey.com/png/full/757-7574864_bola-pokemon-png.png' />
            <img id='pokedex_evee_top_of_page' className='pdex_banner floatRight' src='https://assets.webiconspng.com/uploads/2017/09/Pokemon-PNG-Image-97643.png' />
            <h1 className='pokedex_heading' >Pokedéx </h1>


            <br></br>
            <p className='pokedex_descriptor'>Pokémon in your Pokdex</p>

            <div className='container_of_indiv_pokemon'>
                <IndivPokemon image={'https://www.pngkey.com/png/full/150-1505635_eevee.png'} name={'Pikachu'} type={'Lightning'} move={'Thunderbolt'} ability={'None'} region={'kanto'} />
                <IndivPokemon name={'Squirtle'} type={'Water'} move={'Watergun'} ability={"Swim"} region={'Kanto'} />
                <IndivPokemon name={'Charmander'} type={'Fire'} move={'Fireball'} ability={'None'} region={'Kanto'} />

                <IndivPokemon image={'https://www.pngkey.com/png/full/150-1505635_eevee.png'} name={'Pikachu'} type={'Lightning'} move={'Thunderbolt'} ability={'None'} region={'kanto'} />
                <IndivPokemon image={'https://i.pinimg.com/originals/a2/b7/26/a2b726d756b4b133b8aef6409117e488.png'} name={'Squirtle'} type={'Water'} move={'Watergun'} ability={"Swim"} region={'Kanto'} />
                <IndivPokemon name={'Charmander'} type={'Fire'} move={'Fireball'} ability={'None'} region={'Kanto'} />
            </div>
            <button onClick={this.handleShowPokemon}>Display Pokemon</button>
           {items}
        </div>
        )
    }
}

export default Pokedex