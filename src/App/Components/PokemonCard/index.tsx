import React from "react";
import { Link } from "react-router-dom";
import styles from "./PokemonCard.module.scss";

const PokemonCard = ({ linkTo="/pokedex/pikachu", name="Pikachu", type="electric", img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"} : any) => {

    return (
        <>
            <Link to={linkTo} className={`${styles.PokemonCard}`}>
                <div className={`${styles.PokemonCardName}`}>{name}</div>
                <div className={`${styles.PokemonCardImage}`}><img src={img} alt={name} />
                </div>
                <div className={`${styles.PokemonCardType} ${styles.Electric}`}>{type}</div>
            </Link>
        </>
    )
}

export default PokemonCard;