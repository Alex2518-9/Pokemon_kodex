import type { NextPage } from "next";
import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/Home.module.css";
import FetchPokemons from "../pages/api/getAllPokes";
import { Pok } from "./api/getAllPokes";
import Layout from "../components/Layout";

// called once when app is building
export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const initialPokemon = await response.json();

  return {
    props: {
      initialPokemon,
    },
  };
}

const Home: NextPage = ({ initialPokemon }: any) => {
  const [pokemonResult, setPokemonResult] = useState(initialPokemon);
  const [offset, setOffset] = useState(0);

  const onChangePage = async (url: string, next: boolean) => {
    const response = await fetch(url);
    const nextPokemon = await response.json();
    setOffset(next ? offset + 50 : offset - 50);
    setPokemonResult(nextPokemon);
  };

  return (
    // <Layout title="POKE KODEX">
    <div className={styles.container}>
      <h1 className={styles.containerTitle}>Poke kodex</h1>
      <div>
        {pokemonResult.results.map((pokemon: Pok, index: number) => (
          <PokemonCard type={pokemon.types} index={index + offset} pokemon={pokemon} key={index} />
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <button
          disabled={!pokemonResult.previous}
          className={styles.btn}
          onClick={() => onChangePage(pokemonResult.previous, false)}
        >
          Prev
        </button>
        <button
          disabled={!pokemonResult.next}
          className={styles.btn}
          onClick={() => onChangePage(pokemonResult.next, true)}
        >
          Next
        </button>
      </div>
    </div>
    //  </Layout>
  );
};

export default Home;
