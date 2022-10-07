import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Detail } from "../pages";
import styles from '../styles/PokemonCard.module.css'

interface PageProps {
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
  abilities:
    | {
        ability: {
          name: string;
        };
      }[]
    | undefined;
  id: number;
  name: string;
  image: string;
}
const PokemonList = ({
  id,
  name,
  image,
  abilities,
  viewDetail,
  setViewDetail,
}: PageProps) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(id === viewDetail?.id);
  }, [viewDetail]);

  const closeDetail = () => {
    setViewDetail({
      id: 0,
      isOpen: false,
    });
  };

  return (
     <Link href={{pathname: "pokemon/[id]", query: {id: id} }}>
      {isSelected ? (
   
          <div className={styles.Card}>
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
    
      ) : (
        <section  className={styles.Card}>
         
          <p className={styles.Card_name}>{name}</p>
        
          <Image className={styles.Card_image} src={image} alt="" width={300} height={300} />
        </section>
      )}
     </Link>
  );
};

export default PokemonList;
