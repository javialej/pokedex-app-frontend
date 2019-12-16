import React from "react";

import Template from "../../Template";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Pokedex.module.scss";
import PokemonCard from "../../Components/PokemonCard";

const Home = () => {

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

            { true ? (
                <>                  
                    <div className={styles.PokedexResultsTitle}>Results ...</div>                    
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <PokemonCard />
                            </div>
                            <div className="col-4">
                                <PokemonCard />
                            </div>                        
                            <div className="col-4">
                                <PokemonCard />
                            </div>                            
                        </div>                       
                    </div>                            
                </>
            ): (
                <div className={styles.PokedexResultsTitle}>Search something and discover the world of pokemons!</div>
            )}            

        </Template>
    );
};

export default Home;