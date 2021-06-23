import React from 'react'
import { Component } from 'react'
import {Link} from 'react-router-dom'

import './styling/Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='super_wrapper'> {/* star tag*/}
                <div className='home_wrapper'> 
                    <div class='circle'> 
                    </div>

                    <header>
                        <a href='#' ><img src='https://media.glassdoor.com/sqll/9079/google-squarelogo-1441130773284.png' class='logo' /></a>
                        <ul>
                            <li><a href='#'><Link exact to="/">Home</Link></a> </li>
                            <li><a href='#'><Link to='/Pokedex' >Pokedéx</Link></a></li>
                            <li><a href='#'>Contact</a></li>
                            <li><a href='#'>About</a></li>
                        </ul>
                    </header>
                    <div className='content'>
                        <div class='textBox'>
                            <h2>The world of Pokémon <br></br> Presents <span>Pokdex v3</span></h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                            </p> */}
                            <a href='#'> Learn More</a>
                        </div>

                        <div class='imgBox'>
                            <img src='https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/0aa78a0061bda9d88cbb0bbf739cd9cc56522fe9.png' class='main_page_pokemon' />
                        </div>

                    </div>
                </div>




            </div>
        )
    }
}

export default Home