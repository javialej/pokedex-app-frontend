import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { 
    onPokedexSearchFetch,
    setPokemonConfigDefaultSearch,
    setPokemonConfigSearch,
    setPokemonNameSearch 
} from "../../../Redux/B_actions/pokedex";
import { AppState } from "../../../Redux/D_reducers";
import { 
    getPokemonSearch,
    getListOfResults
} from "../../../Redux/E_selectors/pokedex";


import Template from "../../Template";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Pokedex.module.scss";
import PokemonCard from "../../Components/PokemonCard";

const Home = () => {
    
    const dispatch = useDispatch();

    const PokemonSearch : any = useSelector((state: AppState) => getPokemonSearch(state));
    const results : Array<any> = useSelector((state: AppState) => getListOfResults(state));

    useEffect(() => {
        dispatch(setPokemonConfigDefaultSearch());
        dispatch(onPokedexSearchFetch());
    },[]);

    return (
        <Template>            
            <div className={`input-group ${styles.PokedexSearchBar}`}>                
                <input type="text" className="form-control" placeholder="Search a Pokemon!" aria-label="Search" aria-describedby="Search" />
                <div className="input-group-append">
                    <button className={`${styles.PokedexButton} ${styles.Search}`} type="button" id="button-addon1">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className={`${styles.PokedexButton} ${styles.Clean}`} type="button" id="button-addon2">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>                
            </div>

            { PokemonSearch.loading ? (
                <div className={styles.PokedexResultsTitle}>Loading!...</div>
            ) : (
                <>
                    { results.length ? (
                        <>    
                            <div className={styles.PokedexResultsTitle}>Results ...</div>                    
                            <div className="container">
                                <div className="row">
                                    { results.map((pokemon: any, index) => {
                                        return (
                                            <div key={index} className="col-4 col-md-3 col-lg-2 col-xl-2"> 
                                                <PokemonCard linkTo={`/pokedex/${pokemon.name}`} name={pokemon.name} types={pokemon.types} img={pokemon.img} />
                                            </div>
                                        )                           
                                    })}                            
                                </div>                       
                            </div>
                        </>                        
                    ): (
                        <div className={styles.PokedexResultsTitle}>Search something and discover the world of pokemons!</div>                    
                    )} 
                </>
            )}
          
  



        </Template>
    );
};

export default Home;