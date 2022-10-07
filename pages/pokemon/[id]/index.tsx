import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PokemonDetails } from "../../../components/interfaces";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const { id } = router.query;

  console.log(pokemon);

  useEffect(() => {
    if (!router.isReady) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setIsLoading(false);
        setPokemon(json);
      });
  }, [router.isReady]);

  return (
    <>
      {pokemon.map((pokem) => {
        return (
         
          <div key={pokem.id} className={styles.Card}>
          <p onClick={closeDetail}>X</p>
          <div>
            <Image className={styles.Card_image} src={image} alt="" width={200} height={200} />
            <p className={styles.Card_name}>{name}</p>
          </div>
          <div>
            <p>Abilities:</p>
            {abilities?.map((ab, index) => {
              return <div key={index}>{ab.ability.name}</div>;
            })}
          </div>
        </div>
       
        );
      })}
      <div>Pokemon {id}</div>
    </>
  );
};

export default Pokemon;
