import React from "react";
import { Detail } from "../pages";
import { Abilities } from "./interfaces";
import PokemonList from "./PokemonList";
import styles from "../styles/Home.module.css";
import Link from "next/link";

interface Props {
  pokemons: Abilities[];
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection = ({ pokemons, viewDetail, setViewDetail }: Props) => {
  // const selectPokemon = (id: number) => {
  //   if (!viewDetail.isOpen) {
  //     setViewDetail({
  //       id: id,
  //       isOpen: true,
  //     });
  //   }
  // };

  return (
    // <section
    //   className={
    //     viewDetail.isOpen
    //       ? "collection-container-active"
    //       : "collection-container"
    //   }
    // >
    //   {viewDetail.isOpen ? <div className="overlay"></div> : <div></div>}
    <>
      {pokemons.map((pokemon) => {
        return (
          <Link href={{pathname: "/api/pokemon/[id]", query: {id: pokemon.id} }} key={pokemon.id} /*onClick={() => selectPokemon(pokemon.id)}*/>
            <PokemonList
              viewDetail={viewDetail}
              setViewDetail={setViewDetail}
              name={pokemon.name}
              id={pokemon.id}
              image={pokemon.sprites.front_default}
              abilities={pokemon.abilities}
            />
          </Link>
        );
      })}
    </>
    // </section>
  );
};

export default PokemonCollection;
