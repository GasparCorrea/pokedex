import React from 'react';
import './PokemonSelector.css';
import PokemonEntry from './PokemonEntry'

class PokemonSelector extends React.Component{
  render() {
    return(
      <div className="selector">
        { Object.keys(this.props.pokemons).map((pokemon, i) => {
           return (<div className="select-pokemon"><PokemonEntry number={i+1} name={this.props.pokemons[i].name.toUpperCase()}/></div>) 
        })}  
      </div>
    )
    
  }
}

export default PokemonSelector;
