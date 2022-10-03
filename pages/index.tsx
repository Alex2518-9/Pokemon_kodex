import type { NextPage } from 'next'
import PokemonCard from '../components/PokemonCard'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <PokemonCard />
    </div>
  )
}

export default Home
