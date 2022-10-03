import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Pokemon } from '../models/pokemonModel';

interface allPokemonProps{
    name: string,
    img: string
}


const PokemonCard = ({name, img}: allPokemonProps) => {

  

    useEffect(() => {
     axios.get("./api/getAllPokes").then((data) => 
      Pokemon.create({
        name: data.data.name
      })
      ); 
      
    
    }, [])
    

  return (
    <div className='pokemonData'>
        <Image src={img} alt=""/>
        <h2>{name}</h2>
    </div>
  )
}

export default PokemonCard