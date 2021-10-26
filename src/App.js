
import React from 'react';
import './App.css';
import Header from '../src/screens/header'
import ListadoPokemon from '../src/screens/ListadoPokemon'
import BuscadorPokemon from '../src/components/BuscadorPokemon'


class App extends React.Component{
  render() {
      return (
          <>
            <div className="App">
      <Header/>
      <ListadoPokemon/>
     
    </div>
          </>
      )
  }

}

export default App;
