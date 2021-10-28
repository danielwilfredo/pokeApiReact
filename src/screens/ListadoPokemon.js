import React, { Fragment } from "react";
import pokelogo from "../img/pokelogo.png";
import "../App.css";
import BuscadorPokemon from '../../src/components/BuscadorPokemon'

class ListadoPokemon extends React.Component {
  state = {
    pokemonInfo: [],
    filtrado:false,
    pokemonInfoFiltrada:[],
  };

  async componentDidMount() {
    //ciclo de vida recomendado para consumir apis

    /*
    url a consultar
    https://pokeapi.co/api/v2/pokemon?limit=151
    codigo de referencia */

    await this.listarPokemon();
  }

  listarPokemon = async () => {
    const resultado = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    ).then((response) => response.json());
  //  console.log("resultado", resultado);
    const guardar = resultado.results;
    const pokemonInfo = [];
    for (const dataPokemon of guardar) {
      //console.log("url de guardar", url.url);
      const masinfo = await fetch(dataPokemon.url).then((response) => response.json());
     // console.log("mas info", masinfo);
      const masinfo2 = await fetch(masinfo.forms[0].url).then((response) =>
        response.json()
      );
      pokemonInfo.push({ ...dataPokemon, ...masinfo, ...masinfo2 });
    }
    //console.log("valores pokemon2",guardar[0]?.url)
    this.setState({
      pokemonInfo,
    });
  };

  //function to modify the state

  setPokeInfo=(filterPokemon)=>{
   this.setState({
      pokemonInfo:filterPokemon
    })
    console.log("imprimiendo en listado pokemon", filterPokemon);

  }


  setFiltrado=(filtrado)=>{
    this.setState({
      filtrado:filtrado
     })
     console.log("imprimiendo en listado pokemon", filtrado);
   }

   ///funcion para actualizar el state del filtrado

   setpokemonInfoFiltrada=(pokeFiltrado)=>{
    this.setState({
      pokemonInfoFiltrada:pokeFiltrado
     }) 
   }


  render() {

    const {filtrado}=this.state;


    return (
      <>
<BuscadorPokemon pokemonInfo={this.state.pokemonInfo} setPokeInfo={this.setPokeInfo} filtrado={this.state.filtrado} setFiltrado={this.setFiltrado}/>

        <p
          style={{
            fontSize: 35,
            fontWeight: 500,
            fontStyle: "italic",
            color: "#d2c179",
          }}
        >
          Pokemon List
        </p>
        <div className="listado">
   
   {         //ternario para cargar condicionalmente las cosas
            filtrado ? (<><p> NO TIENE QUE SALIR NADA</p></>) : (<>{
              this.state.pokemonInfo.map((resultado) => (
              <div className="container-poke" key={resultado?.name}>
                <div className="info-pokemon">
                  <div className="imgPokemon">
                  <img
                    src={resultado?.sprites.front_default}
                    alt="imagen pokemon"
                  />
                  </div>
     
                  <p className="Text-info">Number: {resultado?.id}</p>
                  <p className="Text-info">Name: {resultado?.name}</p>
                  <p className="Text-info">
                    Type: {resultado?.types[0].type.name}
                  </p>
                </div>
              </div>
            ))
            
            }</>)}
   
 
        </div>
      </>
    );
  }
}

export default ListadoPokemon;
