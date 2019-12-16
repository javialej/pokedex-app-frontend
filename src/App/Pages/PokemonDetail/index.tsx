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
    faAngleRight,
    faChartLine } from "@fortawesome/free-solid-svg-icons";

import styles from "./PokemonDetail.module.scss";


const PokemonCard = ({ id=25, name="Pikachu", types=["ELECTRIC", "DRAGON"], height=30, weight=120, img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", ...props } : any) => {
    
    let pokeName = props.match.params.id;

    console.log(pokeName);
    
    return (
        <Template>
            <Link to={POKEDEX_PATH} className={""}><FontAwesomeIcon icon={faArrowLeft} /> Return to pokedex...</Link>
            <div className={`${styles.PokemonStart}`}>
                <div className={`${styles.PokemonLeftStart}`}>
                    <div className={`${styles.PokemonDetailID}`}>
                        <p><FontAwesomeIcon icon={faFingerprint} /> ID {id}</p>
                    </div>
                    <div className={`${styles.PokemonDetailHead}`}>
                        <div className={`${styles.PokemonDetailHeadName}`}>{name}</div>
                        <div className={`${styles.PokemonDetailHeadImage}`}><img src={img} alt={name} />
                        </div>
                        <>
                            {types.map((type: any, index : any) => {
                                let [ pokeType, pokeName] = stylePokemonType(type)
                                return <div key={index} className={`${styles.PokemonDetailHeadType} ${pokeType}`}>{pokeName}</div>;
                            })}                                                   
                        </>                            
                    </div>
                </div>
                
                <div className={`${styles.PokemonRightStart}`}>
                    <div className={`${styles.PokemonDetailSectionTitle}`} style={{ color: "#5BA85F" }}>
                        <p><FontAwesomeIcon icon={faStarOfLife} /> Specs</p>
                    </div>
                    <div className={`${styles.PokemonDetailSection} ${styles.Specs}`}>
                        <p><FontAwesomeIcon icon={faAngleDoubleUp} />  <b>Height:</b> {height} cm</p>
                        <p><FontAwesomeIcon icon={faWeight} />  <b>Weight:</b> {weight} kg</p>
                    </div>
                </div>
            </div>

            <div className={`${styles.PokemonDetailSectionTitle}`} style={{ color: "#BF4240" }}>
                <p><FontAwesomeIcon icon={faFire} /> Movements list</p>
            </div>
            <div className={`${styles.PokemonDetailSection} ${styles.MovementsList}`}>
                <ul className="list-group list-group-flush" style={{ width: "100%" }}>
                    <li className="list-group-item"><FontAwesomeIcon icon={faAngleRight} /> Movement 1</li>
                    <li className="list-group-item"><FontAwesomeIcon icon={faAngleRight} /> Movement 2</li>
                    <li className="list-group-item"><FontAwesomeIcon icon={faAngleRight} /> Movement 3</li>
                    <li className="list-group-item"><FontAwesomeIcon icon={faAngleRight} /> Movement 4</li>
                </ul>
            </div>

            <div className={`${styles.PokemonDetailSectionTitle}`} style={{ color: "#993fA9" }}>
                <p><FontAwesomeIcon icon={faChartLine} /> Evolution <i>(future improvement)</i></p>
            </div>            
        </Template>
    )
}

const stylePokemonType = (typeName : any) => {
    
    let type = styles.Undetermined;    
    let name = "???";

    switch(typeName){
        case "NORMAL": type = styles.Normal; name="NORMAL"; break;
        case "FIRE": type = styles.Fire; name="FIRE"; break;
        case "FIGHTING": type = styles.Fighting; name="FIGHTING"; break;
        case "WATER": type = styles.Water; name="WATER"; break;
        case "FLYING": type = styles.Flying; name="FLYING"; break;
        case "GRASS": type = styles.Grass; name="GRASS"; break;
        case "POISON": type = styles.Poison; name="POISON"; break;
        case "ELECTRIC": type = styles.Electric; name="ELECTRIC"; break;
        case "GROUND": type = styles.Ground; name="GROUND"; break;
        case "PSYCHIC": type = styles.Psychic; name="PSYCHIC"; break;
        case "ROCK": type = styles.Rock; name="ROCK"; break;
        case "ICE": type = styles.Ice; name="ICE"; break;
        case "BUG": type = styles.Bug; name="BUG"; break;
        case "DRAGON": type = styles.Dragon; name="DRAGON"; break;
        case "GHOST": type = styles.Ghost; name="GHOST"; break;
        case "DARK": type = styles.Dark; name="DARK"; break;
        case "STEEL": type = styles.Steel; name="STEEL"; break;
        case "FAIRY": type = styles.Fairy; name="FAIRY"; break;
        default:
            type = styles.Undetermined;
    }    

    return [type, name];
}

export default PokemonCard;