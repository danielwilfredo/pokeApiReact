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

          setFiltrado=(filtrado, pokeFiltrado)=>{
            this.props.setFiltrado(filtrado);
            this.props.setpokemonInfoFiltrada(pokeFiltrado);
            this.setState({
              typePokemon:"",
              pokemon:""
            })

          }


     
  render() {

    const {pokemonInfo, setPokeInfo, setFiltrado}=this.props;
    const {typePokemon, pokemon} = this.state;


    const typefilter = pokemonInfo.filter((data) => data.types[0].type.name === typePokemon)
    const nameFilter = pokemonInfo.filter((data) => data.name === pokemon)

    console.log("imprimiendo pokemonInfo", pokemonInfo)
// onClick={()=>console.log("imprimiendo prueba de filter", prueba)}


      return (
      <>
        <p className="Text-info">Buscador</p>
        <label className="Text-info">Search Pokemon by Type:</label>
        <input className="input-pokemon"
         name="type" id="type"
          onChange={(event)=> this.setTypePokemon(event.target.value)}
          value={typePokemon}
          />
        <label className="Text-info">Search Pokemon by Name:</label>
        <input className="input-pokemon" 
        name="pokemon" id="pokemon" 
        onChange={(event)=> this.setPokemon(event.target.value)}
        value={pokemon}/>
        <br />
        <button  className="btn-search" onClick={()=>this.setFiltrado(true, typefilter)}>
          Search Type
        </button>
        <button  className="btn-search" onClick={()=>this.setFiltrado(true, nameFilter)}>
          Search Pokemon
        </button>

        <button  className="btn-search" onClick={()=>this.props.setFiltrado(false)}>
          Reset Search
        </button>
      </>
    );
  }
}
export default BuscadorPokemon;
