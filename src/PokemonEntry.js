import React from 'react'
import './PokemonEntry.css';

class PokemonEntry extends React.Component{
    render() {
      return(
        <div className="entry">
            <div className="entry-item">
                        <img className="pb" alt="Pokeball" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"/>
            </div>
            <div className="entry-item entry-text">
                        {"№"+this.props.number.toString().padStart(3,"0")}
            </div>
            <div className="entry-item entry-text">
                        {this.props.name.padStart(11,"\u00a0")}
            </div>


        </div>
      )
      
    }
  }
  
  export default PokemonEntry;