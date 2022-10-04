import type { NextPage } from "next";
import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/Home.module.css";
import useFetchPokemon from "../utils/useRequest";
import { Pok } from "./api/getAllPokes";

const Home: NextPage = () => {
  const { result, error } = useFetchPokemon();

  const [pokemonResult, setPokemonResult] = useState()

  // setPokemonResult(result)

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;

  return (
    <div className={styles.container}>
      <h1 className={styles.containerTitle}>Poke kodex</h1>
      <div>
        {result.results.map((pokemon: Pok) => (
          <PokemonCard  name={pokemon.name} key={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
