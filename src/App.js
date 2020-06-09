import React from 'react';
import './App.css';
import PokemonSelector from './PokemonSelector'
import PokemonDescription from './PokemonDescription';
import MyFooter from './MyFooter'
import MyHeader from './MyHeader'
import data from './pokemon.json'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        selected: data["0"]
      };
  }

  handleChange = param => e => {
    // param is the argument you passed to the function
    // e is the event object that returned
    let id = (param).toString();
    this.setState({selected : data[id]});
};
  render(){
    return(
        <div>
        <MyHeader/>
        <div className="content">
            <div className="content-item">
                <PokemonDescription  selected={this.state.selected} />
            </div>
            <div className="content-item">
                <PokemonSelector buttonClick={this.handleChange} pokemons={data} />
            </div>
        </div>
        <MyFooter/>
      </div>
    )
    
  }
}

export default App;