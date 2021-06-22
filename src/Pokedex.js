import React from 'react'
import {Component} from 'react'
import IndivPokemon from './IndivPokemon'
import './styling/Pokedex.css'



class Pokedex extends Component {
    constructor(props){
        super(props)
    }

    render(){
       return( <div className='pokedex_wrapper'>    
              
                    <img id='pokedx_pokeball' className='pdex_banner floatLeft' src='https://www.pngkey.com/png/full/757-7574864_bola-pokemon-png.png' />
                    <img id='pokedex_pikachu_top_of_page' className='pdex_banner floatRight' src='https://lh3.googleusercontent.com/proxy/2GUG1pKHN8Q81qCpE5gZU2GWOBHIcpSWdUbMqfd7hWzG0B8k03ugWvnrZgZBU-D8X7pm1EEWl1eophjQN5y3hEPpRjUF6_VsLOzsOUetMxvSx8T_--Uy41BKzuTTw6brBA' />
                    <h1 className='pokedex_heading' >Pokedéx </h1>
                    
                
                <br></br>
                <p className='pokedex_descriptor'>Your Pokémon</p>

                <IndivPokemon name={'Pikachu'} />
                <IndivPokemon name={'Squirtle'} />
                <IndivPokemon name={'Charmander'} />
            </div>
       )
    }
}

export default Pokedex