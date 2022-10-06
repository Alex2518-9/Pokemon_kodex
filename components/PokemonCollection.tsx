import React from "react";
import { PokemonDetails } from "./interfaces";
import PokemonList from "./PokemonList";

interface Props {
  pokemons: PokemonDetails[];
}

const PokemonCollection = ({ pokemons }: Props) => {
  return (
    <div>
      <section className="collection-container">
        {pokemons.map((pokemon) => (
        //   <div className="" >
            <PokemonList 
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.sprites.front_default}
            />
        //   </div>
        ))}
      </section>
    </div>
  );
};

export default PokemonCollection;
