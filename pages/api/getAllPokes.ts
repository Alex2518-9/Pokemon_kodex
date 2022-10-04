import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export interface Pok {
   name: string,
   url?: string
}

async function getAllPokemon(req: NextApiRequest, res: NextApiResponse) {
   try {
      const allData: Pok = await axios.get("https://pokeapi.co/api/v2/pokemon/")
         .then((res) => res.data.results.map((item: Pok) => {
            console.log(item);

            return item
         }));
      console.log(allData);

      res.status(200).json(allData);
   } catch (error) {
      res.status(404).send({ error })
   }
}



export default getAllPokemon