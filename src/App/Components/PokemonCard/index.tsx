import React from "react";
import { Link } from "react-router-dom";
import styles from "./PokemonCard.module.scss";

const PokemonCard = ({ linkTo="/pokedex/pikachu", name="Pikachu", types=["ELECTRIC", ""], img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"} : any) => {

    return (
        <>
            <Link to={linkTo} className={`${styles.PokemonCard}`}>
                <div className={`${styles.PokemonCardName}`}>{name}</div>
                <div className={`${styles.PokemonCardImage}`}><img src={img} alt={name} />
                </div>
                {types.map((type: any, index : any) => {
                    let [ pokeType, pokeName] = stylePokemonType(type)
                    return <div key={index} className={`${styles.PokemonCardType} ${pokeType}`}>{pokeName}</div>;
                })}                 
            </Link>
        </>
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