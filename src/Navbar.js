import React from 'react';
import { Component } from 'react'
import './styling/Navbar.css'
import {Link} from 'react-router-dom'


class Navbar extends Component {
    constructor(props) {
        super(props);

        //state can go here   
    }

    render() {

        return (
            <div className='nav_wrapper'>
                <div className='nav_header'>
                    <img className='nav_logo' src='https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67' alt='logo' />
                    <nav>
                        <ul className='nav_links'>
                            <li><a href='#'><Link exact to="/">Home</Link></a></li>
                            <li><a href='#'><Link to='/Pokedex' >Pokedéx</Link></a></li>
                            <li><a href='#'><Link to='/SearchPage'> Search Pokémon</Link></a></li>
                            <li><a href='#'><Link to='/AddPokemon'> Add Pokémon</Link></a></li>
                            {/* <li><a hred='#'>Test</a></li> */}
                        </ul>
                    </nav>
                    {/* <a><button className='nav_button'>Hello</button></a> */}
                </div>
            </div>
        )
    }
}
export default Navbar;