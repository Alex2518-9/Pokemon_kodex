import Image from "next/image";
import React from "react";
import FetchPokemons from "../pages/api/getAllPokes";
import { Pok } from "../pages/api/getAllPokes";
import styles from "../styles/PokemonCard.module.css";
import Link from "next/link";
import { Url } from "url";

interface PokemonProps extends Pok {
  type: {
    name: string;
    url: string | Url;

  };
  index: number,
  pokemon: any
}

export default function PokemonCard({  pokemon, index, name, type }: PokemonProps) {
  const { result, error } = FetchPokemons(name);



  const pokeIndex = ('000' + (index +1)).slice(-3)

  return (
    <Link href={`/api/pokemon/${pokemon.name}`}>
      <div className={styles.Card}>
        <span className={styles.Card_id}>#{pokeIndex}</span>
        <Image
          className={styles.Card_image}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`}
          alt={pokemon.name}
          width={550}
          height={300}
        />
        <h1 className={styles.Card_name}>{pokemon.name}</h1>
        <span className={styles.Card_details}>
          {/* {pokemon.types.map((poke: PokemonProps) => poke.type.name).join(", ")} */}
        </span>
      </div>
    </Link>
  );
}
