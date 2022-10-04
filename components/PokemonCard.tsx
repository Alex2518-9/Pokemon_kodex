import Image from "next/image";
import React from "react";
import useFetchPokemon from "../utils/useRequest";
import { Pok } from "../pages/api/getAllPokes";
import styles from "../styles/PokemonCard.module.css"

interface PokemonProps extends Pok {
  type: {
    name: string;
    url: string;
  };
}

export default function PokemonCard({ name }: PokemonProps) {
  const { result, error } = useFetchPokemon(name);

  console.log(result);

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;

  return (
    <div className={styles.Card}>
      <span className={styles.Card_id}>#{result.id}</span>
      <Image
        className={styles.Card_image}
        src={result.sprites.front_default}
        alt={name}
        width={450}
        height={300}
      />
      <h1 className={styles.Card_name}>{name}</h1>
      <span className={styles.Card_details}>
        {result.types.map((poke: PokemonProps) => poke.type.name).join(", ")}
      </span>
    </div>
  );
}
