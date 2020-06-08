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
                        {this.props.number}
            </div>
            <div className="entry-item entry-text">
                        {this.props.name}
            </div>


        </div>
      )
      
    }
  }
  
  export default PokemonEntry;