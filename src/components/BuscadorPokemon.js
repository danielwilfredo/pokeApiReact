import React from "react";
import "../App.css";

class BuscadorPokemon extends React.Component {

  constructor(props){
    super(props)

    this.state={
      typePokemon:"",
      pokemon:""
    }

 }

  render() {

    const name=document.getElementById("type");

    //function to modify the state type

   /*  setTypePokemon=(typePoke)=>
    {
      this.setState({
        typePoke:typePoke
    })
    }
    onClick={()=>this.setTypePokemon("Planta")}
    */


    return (
      <>
        <p className="Text-info">Buscador</p>
        <label className="Text-info">Search Pokemon by Type:</label>
        <input name="type" id="type" />
        <label className="Text-info">Search Pokemon by Name:</label>
        <input name="pokemon" id="pokemon" />
        <br />
        <input type="button" value="Search" />
      </>
    );
  }
}

export default BuscadorPokemon;
