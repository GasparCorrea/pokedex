import React from 'react';
import './PokemonDescription.css';
import PokemonPreview from './PokemonPreview'

class PokemonDescription extends React.Component{
  render() {
    return(
      <div className="description">
        <div className="top-row">
          <PokemonPreview selected={this.props.selected}/>
          <div className="title">
            {this.props.selected.name.toUpperCase()} #{this.props.selected.number}
          </div>
        </div>
          Type: {this.props.selected.types.toString().toUpperCase()}
          <br/>
          Weight: {parseInt(this.props.selected.weight)/10} kg
          <br/>
          HP: {this.props.selected.hp} |ATK: {this.props.selected.attack} | DEF: {this.props.selected.defense} | SP ATK: {this.props.selected["special-attack"]} | SP DEF: {this.props.selected["special-defense"]} | SPEED: {this.props.selected.speed}
      </div>
    )
    
  }
}

export default PokemonDescription;