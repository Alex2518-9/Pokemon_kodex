import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PokemonDetails, Result } from "../components/interfaces";
import PokemonCollection from "../components/PokemonCollection";
import styles from '../styles/Home.module.css'

export interface Detail {
  id: number;
  isOpen: boolean;
}
const Home: NextPage = () => {
  const [allPokemon, setAllPokemon] = useState<PokemonDetails[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [viewDetail, setViewDetail] = useState<Detail>({
    id: 0,
    isOpen: false,
  });

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
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
    <>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <PokemonCollection
            pokemons={allPokemon}
            viewDetail={viewDetail}
            setViewDetail={setViewDetail}
          />
        </div>
      </div>
      {!viewDetail.isOpen && (
        <button onClick={nextPage}>
          {loading ? "Loading..." : "Load more"}
        </button>
      )}
    </>
  );
};

export default Home;
