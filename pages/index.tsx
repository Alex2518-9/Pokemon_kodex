import React, { useEffect, useState } from "react";
import axios from "axios";
import { PokemonDetails, Result } from "../components/interfaces";
import PokemonCollection from "../components/PokemonCollection";

const Home = () => {
  const [allPokemon, setAllPokemon] = useState<PokemonDetails[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
      );
      setNextUrl(res.data.next);
      res.data.results.forEach(async (pokemon: Result) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setAllPokemon((p) => [...p, poke.data]);
        setLoading(false);
      });
    };
    getPokemon();
  }, []);

  const nextPage = async () => {
    setLoading(true);
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Result) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setAllPokemon((p) => [...p, poke.data]);
      setLoading(false);
    });
  };
  return (
    <div>
      <div className="container">
        <div className="allContainer">
          <PokemonCollection pokemons={allPokemon} />
        </div>
      </div>
      <button onClick={nextPage}>{loading ? 'Loading...' : 'Load more'}</button>
    </div>
  );
};

export default Home;
