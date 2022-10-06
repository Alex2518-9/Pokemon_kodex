import Image from "next/image";
import React from "react";

interface PageProps {
  id: number;
  name: string;
  image: string;
}
const PokemonList = ({ id, name, image }: PageProps) => {
  return <div>
    <section className="pokemon-list-container">
        <p>{name}</p>
        <Image src={image} alt='' width={300} height={300} />
    </section>
  </div>;
};

export default PokemonList;
