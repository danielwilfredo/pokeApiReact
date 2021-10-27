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

     //function to modify the state type
     setTypePokemon=(typePoke)=>
     {
       this.setState({
        typePokemon:typePoke
     })
     }

          //function to modify the state pokemon
          setPokemon=(pokemon)=>
          {
            this.setState({
              pokemon:pokemon
          })
          }

  render() {


    const{typePokemon, pokemon} = this.state;


    return (
      <>
        <p className="Text-info">Buscador</p>
        <label className="Text-info">Search Pokemon by Type:</label>
        <input name="type" id="type" onChange={(event)=> this.setTypePokemon(event.target.value)}/>
        <label className="Text-info">Search Pokemon by Name:</label>
        <input name="pokemon" id="pokemon" onChange={(event)=> this.setPokemon(event.target.value)}/>
        <br />
        <input type="button" value="Search" onClick={()=>console.log("valor del state", pokemon)}/>
      </>
    );
  }
}
export default BuscadorPokemon;
