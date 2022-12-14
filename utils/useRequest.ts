import useSWR from 'swr'

const fetcher = async (url: string) => await fetch(url).then((res) => res.json())

const API_URL = 'https://pokeapi.co/api/v2/pokemon'
const PAGE_LIMIT = 100

export default function useFetchPokemon(name?: string) {
  const uri = name ? `${API_URL}/${name}` : `${API_URL}?limit=${PAGE_LIMIT}`
  const { data: result, error } = useSWR(uri, fetcher)

  return { result, error }
}