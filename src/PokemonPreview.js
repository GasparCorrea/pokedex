import React from 'react';
import './PokemonPreview.css';


class PokemonPreview extends React.Component{
  render() {
    return(
      <div className="preview">
        <img className="sprite" src={this.props.selected.sprite} alt="sprite"/>
      </div>
    )
    
  }
}

export default PokemonPreview;