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
          HP: {this.props.selected.hp.toString().padEnd(3,"\u00a0")} | ATK: {this.props.selected.attack.toString().padEnd(3,"\u00a0")} | DEF: {this.props.selected.defense.toString().padEnd(3,"\u00a0")} | SP ATK: {this.props.selected["special-attack"].toString().padEnd(3,"\u00a0")} | SP DEF: {this.props.selected["special-defense"].toString().padEnd(3,"\u00a0")} | SPEED: {this.props.selected.speed.toString().padEnd(3,"\u00a0")}
      </div>
    )
    
  }
}

export default PokemonDescription;