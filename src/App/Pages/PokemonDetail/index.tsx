import React from "react";

import Template from "../../Template";

import { Link } from "react-router-dom";
import { POKEDEX_PATH } from "../../../Config/constants/ROUTER_URLs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFingerprint,
    faArrowLeft, 
    faStarOfLife,
    faAngleDoubleUp,
    faWeight,
    faFire,
    faChartLine } from "@fortawesome/free-solid-svg-icons";

import styles from "./PokemonDetail.module.scss";

const PokemonCard = ({ id=25, name="Pikachu", type="electric", height=30, weight=120, img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"} : any) => {

    return (
        <Template>
            <Link to={POKEDEX_PATH} className={""}><FontAwesomeIcon icon={faArrowLeft} /> Return to pokedex...</Link>
            <div className={`${styles.PokemonDetailID}`}>
                <p><FontAwesomeIcon icon={faFingerprint} /> ID {id}</p>
            </div>
            <div className={`${styles.PokemonDetailHead}`}>
                <div className={`${styles.PokemonDetailHeadName}`}>{name}</div>
                <div className={`${styles.PokemonDetailHeadImage}`}><img src={img} alt={name} />
                </div>
                <div className={`${styles.PokemonDetailHeadType} ${styles.Electric}`}>{type}</div>
            </div>

            <div className={`${styles.PokemonDetailSectionTitle}`} style={{ color: "#5BA85F" }}>
                <p><FontAwesomeIcon icon={faStarOfLife} /> Specs</p>
            </div>
            <div className={`${styles.PokemonDetailSection} ${styles.Specs}`}>
                <p><FontAwesomeIcon icon={faAngleDoubleUp} />  <b>Height:</b> {height} cm</p>
                <p><FontAwesomeIcon icon={faWeight} />  <b>Weight:</b> {weight} kg</p>
            </div>

            <div className={`${styles.PokemonDetailSectionTitle}`} style={{ color: "#BF4240" }}>
                <p><FontAwesomeIcon icon={faFire} /> Movements list</p>
            </div>
            <div className={`${styles.PokemonDetailSection} ${styles.MovementsList}`}>

            </div>

            <div className={`${styles.PokemonDetailSectionTitle}`} style={{ color: "#993fA9" }}>
                <p><FontAwesomeIcon icon={faChartLine} /> Evolution <i>(future improvement)</i></p>
            </div>            
        </Template>
    )
}

export default PokemonCard;