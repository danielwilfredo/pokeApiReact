import React from "react";
import "../App.css";

class BuscadorPokemon extends React.Component {
  render() {
    return (
      <>
        <p className="Text-info">Buscador</p>
        <label className="Text-info">Search Pokemon by Type:</label>
        <input />
        <label className="Text-info">Search Pokemon by Name:</label>
        <input />
        <br />
        <input type="button" value="Search" />
      </>
    );
  }
}

export default BuscadorPokemon;
