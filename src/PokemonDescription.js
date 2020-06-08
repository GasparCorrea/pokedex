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
            {this.props.selected.name.toUpperCase()} {this.props.selected.number}
          </div>
        </div>
          Type: Fire
          <br/>
          Weight: 16 kg
          <br/>
          ATK: 12 | DEF: 12 | HP: 12 | SP ATK: 12 | SP DEF: 12 | HP: 12  
      </div>
    )
    
  }
}

export default PokemonDescription;