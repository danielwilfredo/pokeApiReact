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


          ///
          setFiltrado=()=>{

          }



  render() {

    const {pokemonInfo, setPokeInfo, setFiltrado}=this.props;
    const {typePokemon, pokemon} = this.state;


    const prueba = pokemonInfo.filter((data) => data.types[0].type.name === typePokemon)

    console.log("imprimiendo prueba de filter", prueba)
// onClick={()=>console.log("imprimiendo prueba de filter", prueba)}

    return (
      <>
        <p className="Text-info">Buscador</p>
        <label className="Text-info">Search Pokemon by Type:</label>
        <input className="input-pokemon" name="type" id="type" onChange={(event)=> this.setTypePokemon(event.target.value)}/>
        <label className="Text-info">Search Pokemon by Name:</label>
        <input className="input-pokemon" name="pokemon" id="pokemon" onChange={(event)=> this.setPokemon(event.target.value)}/>
        <br />
        <button  className="btn-search" onClick={()=>setPokeInfo(prueba)}>
          Search Pokemon
        </button>
      </>
    );
  }
}
export default BuscadorPokemon;
