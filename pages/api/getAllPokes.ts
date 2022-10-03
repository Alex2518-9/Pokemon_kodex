import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";


async function getAllPokemon(req:NextApiRequest, res: NextApiResponse) {
   try {
      const allData = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      console.log(allData.data)
      
   
      
      res.status(200).send(allData);
   } catch (error) {
      res.status(404).send({error})
   }
}



export default getAllPokemon