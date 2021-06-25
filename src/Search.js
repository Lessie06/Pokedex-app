import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            type:'',
            pokemonIndex:'',
            sprites:''
        }
    }

    render(){

        // const name = this.props.name;
        // const url = this.props.image;
        // const sprite = this.props.sprites;
        return(
            <div >
            <h3> Abilities/type: {this.props.name}</h3>
           
            
           
            
            </div>
        )
    }
}
export default Search;