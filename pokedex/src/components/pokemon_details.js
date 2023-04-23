import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {searchPokemon} from "./Datafetch";


function PokemonDetail() {
  const [pokemons, setPokemons] = useState({});
  const [fetching, setFetching] = useState(false);
  const { id } = useParams();

  const search = async (id) => {
    try {
      setFetching(true)
      const data = await searchPokemon(id);

      console.log("PokemonDetail fetched data")
      console.log(data);
      setPokemons(data);
    } catch (err) {}
  };

  useEffect(() => {
    if (!fetching) {
      search(id);
    }
  }, [pokemons]);

  return (
    <div>
      <h2>Pokemon name: {pokemons.name}</h2>
      <img src={pokemons.sprites?.front_default} alt={pokemons.name} />
      <p>HP: {pokemons.base_stat}</p>
      <p>Attack: {pokemons.attack}</p>
      <p>Defence: {pokemons.defence}</p>
      <p>Speed: {pokemons.speed}</p>
      <p>Height: {pokemons.height} cm</p>
      <p>Weight: {pokemons.weight} kg</p>
     </div>
  );
}

export default PokemonDetail;