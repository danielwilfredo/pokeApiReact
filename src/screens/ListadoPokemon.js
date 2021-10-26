import React, { Fragment } from "react";
import pokelogo from "../img/pokelogo.png";
import "../App.css";
import BuscadorPokemon from '../../src/components/BuscadorPokemon'

class ListadoPokemon extends React.Component {
  state = {
    pokemonInfo: [],
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
    console.log("resultado", resultado);
    const guardar = resultado.results;
    const pokemonInfo = [];
    for (const url of guardar) {
      console.log("url de guardar", url.url);
      const masinfo = await fetch(url.url).then((response) => response.json());
      console.log("mas info", masinfo);
      const masinfo2 = await fetch(masinfo.forms[0].url).then((response) =>
        response.json()
      );
      pokemonInfo.push({ ...guardar, ...masinfo, ...masinfo2 });
    }
    //console.log("valores pokemon2",guardar[0]?.url)
    this.setState({
      pokemonInfo,
    });
  };

  //function to modify the state

  setPokeInfo=(filterPokemon)=>{
   /* this.setState({
      pokemonInfo:filterPokemon
    })*/
    console.log("imprimiendo en listado pokemon", filterPokemon);

  }


  render() {
    return (
      <>
<BuscadorPokemon pokemonInfo={this.state.pokemonInfo} setPokeInfo={this.setPokeInfo}/>

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
          {this.state.pokemonInfo.map((resultado) => (
            <div className="container-poke" key={resultado?.name}>
              <div className="info-pokemon">
                <img
                  src={resultado?.sprites.front_default}
                  alt="imagen pokemon"
                />
                <p className="Text-info">Number: {resultado?.id}</p>
                <p className="Text-info">Name: {resultado?.name}</p>
                <p className="Text-info">
                  Type: {resultado?.types[0].type.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ListadoPokemon;
