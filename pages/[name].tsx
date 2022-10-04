import React from 'react'
import styles from "../styles/PokemonDetail.module.css"

const pokemonDetail = () => {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailCard}>
        <div className={styles.leftSide}></div>
        <div className={styles.rightSide}></div>
      </div>
    </div>
  )
}

export default pokemonDetail