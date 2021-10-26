import React from 'react';
import pokelogo from '../img/pokelogo.png';
import '../App.css';

class Header extends React.Component {
    state = {
      usuario: "",
      contrasena: "",
    };
    render() {
      return (
        <>
      <header className="App-header">
        <img src={pokelogo} alt="pokelogo" style={{
          borderRadius:15,
          marginTop:25
        }}/>
        <p style={{
          fontSize:35,
          fontWeight:500,
          fontStyle:'cursive',
        }}>
        Kanto Pokedex
        </p>
      </header>
        </>

      )
  }
}

export default Header;