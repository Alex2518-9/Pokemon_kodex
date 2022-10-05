// import axios from "axios";
// import { NextApiRequest, NextApiResponse } from "next";
import useSWR from 'swr'
export interface Pok {
   name: string,
   url?: string,
   types:any
}





const fetcher = async (url: string) => await fetch(url).then((res) => res.json())

const API_URL = 'https://pokeapi.co/api/v2/pokemon'
const PAGE_LIMIT = 100

export default function FetchPokemons(name?: string) {
   const uri = name ? `${API_URL}/${name}` : `${API_URL}?limit=${PAGE_LIMIT}`
   const { data: result, error } = useSWR(uri, fetcher)

   return { result, error }
}







// async function getAllPokemon(req: NextApiRequest, res: NextApiResponse) {
//    try {
//       const allData: Pok = await axios.get("https://pokeapi.co/api/v2/pokemon/")
//          .then((res) => res.data.results.map((item: Pok) => {
//             console.log(item);

//             return item
//          }));
//       console.log(allData);

//       res.status(200).json(allData);
//    } catch (error) {
//       res.status(404).send({ error })
//    }
// }



// export default getAllPokemon