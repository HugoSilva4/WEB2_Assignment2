import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {searchPokemon} from "./Datafetch";
import Header from "./Header";


function PokemonDetail() {
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const search = async (id) => {
    try {
      setLoading(false);
      const data = await searchPokemon(id);

      console.log("PokemonDetail fetched data")
      console.log(data);
      //setPokemons(data);
      setLoading(true);
    } catch (err) {}
  };

  useEffect(() => {
    search(id);
  }, [pokemons]);

  return (
    <div>
      <Header />
    </div>
  );
}

export default PokemonDetail;