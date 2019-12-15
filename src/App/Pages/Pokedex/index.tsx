import React from "react";
import { Link } from "react-router-dom";

import Template from "../../Template";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

import { HOME_PATH } from "../../../Config/constants/ROUTER_URLs";

import styles from "./Pokedex.module.scss";

const Home = () => {

    return (
        <Template>
            <div className={styles.PokedexSearchBar}>
                                   
            </div>

            <div className={`input-group ${styles.PokedexSearchBar}`}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                </div>
                <input type="text" className="form-control is-valid" placeholder="Trainer full name" aria-label="Username" aria-describedby="basic-addon1" />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please complete input form!</div>
            </div>
        </Template>
    );
};

export default Home;