import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {searchPokemon} from "./Datafetch";
import Header from "./Header";
//import pokemon_details from "./components/pokemon_details";


function PokemonDetail() {
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const search = async (id) => {
    try {
      setLoading(false);
      const data = await searchPokemon(id);

      console.log(data);
      setPokemons(data);
      setLoading(true);
    } catch (err) {}
  };

  useEffect(() => {
    search(id);
  }, []);

  {
    console.log(pokemons);
  }

  return (
    <div>
      <Header />
      <pokemon_details pokemons={pokemons} />
    </div>
  );
}


export default PokemonDetail;