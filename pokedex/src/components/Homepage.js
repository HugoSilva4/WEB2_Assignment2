import React, { useState, useEffect } from "react";
import { getPokemonData, getPokemons } from "./Datafetch";
import Pokedex from "./Pokedex";
import Header from "./Header";
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
    /*if (!searching) {
      fetchPokemons();
    }*/
  }, [page]);

  return (
    //<SearchBar onSearch={onSearch} />
    <div>
      <Header />
      
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
  );
}

/*const Div = styled.div`
  text-align: center;
  font-size: 1.25rem;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    display: flex;
  }
`;*/

/*const Img = styled.img`
  @media (max-width: 768px) {
    width: 80%;
  }
`;*/

export default Home;
