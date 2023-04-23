import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "./components/Datafetch";
import About from "./components/About";
import "./App.css";
import Home from './components/Homepage';
import Pokedex from "./components/Pokedex";
import PokemonDetail from './components/pokemon_details';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);


  const itensPerPage = 20;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        loading(true);
        notFound(false);
        const data = await pokemons(itensPerPage, itensPerPage * page);
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url);
        });
        const results = await Promise.all(promises);
        setPokemons(results);
        setLoading(false);
        setTotalPages(Math.ceil(data.count / itensPerPage));
      } catch (error) {
        console.log("fetchPokemons error: ", error);
      }
    };
  }, [page]);


  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path ="about" element={<About />} exact />
        <Route path="/detail/:id" element={<PokemonDetail/>}/>
        <Route path="*" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
