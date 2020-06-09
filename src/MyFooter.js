import React from 'react';
import './MyFooter.css';


class MyFooter extends React.Component{
  render() {
    return(
      <footer className="footer">
          made by <a href="https://github.com/GasparCorrea">GasparCorrea</a>.
          <small> Pokémon and Pokémon character names are trademarks of Nintendo.</small>
      </footer>
    )
    
  }
}

export default MyFooter;