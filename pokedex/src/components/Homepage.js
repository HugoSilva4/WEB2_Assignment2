import React, { useState, useEffect } from "react";
import { getPokemonData, getPokemons } from "./Datafetch";
import Pokedex from "./Pokedex";
import "../Homepage.css";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(20, 20 * page);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <div className="pokedex">
        {notFound ? (
          <div className="not-found-text">
            <h1>Sorry, Pokemon not found! </h1>
            <img alt="loading..." />
          </div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
