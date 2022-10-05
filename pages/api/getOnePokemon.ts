import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'



interface OnePokemonProp{
    id: number
}
export default async function getOnePokemon(req: NextApiRequest, res: NextApiResponse) {
  const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/:${id}`)
}
