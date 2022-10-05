import Image from "next/image";
import React from "react";
import styles from "../../styles/PokemonDetail.module.css";
import FetchPokemons from "../api/getAllPokes";
import { Pok } from "../api/getAllPokes";

interface PokemonProp {
  onePokemon: Pok;
}

// called each request
export async function getServerSideProps(context: any) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`);
  const onePokemon = await response.json();
  return {
    props: {
      onePokemon
    },
  };
}

const pokemonDetail = ({onePokemon}: any) => {

  const pokeIndex = ('000' + (onePokemon.id)).slice(-3)
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailCard}>
        <div className={styles.leftSide}>
          <span>#{pokeIndex}</span>
        <Image
          className={styles.Card_image}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`}
          alt={onePokemon.name}
          width={550}
          height={300}
        />
          
          </div>
        <div className={styles.rightSide}>
        <span>{onePokemon.name}</span>
        </div>
      </div>
    </div>
  );
};

export default pokemonDetail;
