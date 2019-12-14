import React from "react";
import Template from "../../Template";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

import styles from "./SignUp.module.scss";

const Home = () => {

    return (
        <Template>
            <div className={styles.HomeWelcome}> Welcome to pokedex app! </div>
            <div className={styles.HomeLogin}>
                <div className={styles.HomeLoginTitle}>Sign Up</div>
                <div className={styles.HomeLoginCaption}>Please fill the form inputs</div>
                <div className={`input-group ${styles.HomeUsername}`}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className={`input-group ${styles.HomePassword}`}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                    </div>
                    <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div>
                    Don't have an account? Create one
                </div>                
                <button>Sign in</button>
            </div>
        </Template>
    );
};

export default Home;