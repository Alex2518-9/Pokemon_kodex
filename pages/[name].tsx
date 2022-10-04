import React from 'react'
import styles from "../styles/PokemonDetail.module.css"
import useFetchPokemon from '../utils/useRequest';
import { Pok } from './api/getAllPokes';


export async function getStaticProps({ name, url }: Pok) {
  const postData = await useFetchPokemon(name);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = useFetchPokemon();
  return {
    paths,
    fallback: false,
  };
}

const pokemonDetail = () => {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailCard}>
        <div className={styles.leftSide}></div>
        <div className={styles.rightSide}></div>
      </div>
    </div>
  )
}

export default pokemonDetail