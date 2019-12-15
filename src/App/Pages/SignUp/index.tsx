import React from "react";
import { Link } from "react-router-dom";

import Template from "../../Template";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

import { HOME_PATH } from "../../../Config/constants/ROUTER_URLs";

import styles from "./SignUp.module.scss";

const Home = () => {

    return (
        <Template>
            <div className={styles.SignUp}>
                <div className={styles.SignUpTitle}>Sign Up</div>
                <div className={styles.SignUpCaption}>Please fill the form inputs</div>

                <div className={`input-group ${styles.SignUpInput}`}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    </div>
                    <input type="text" className="form-control is-valid" placeholder="Trainer full name" aria-label="Username" aria-describedby="basic-addon1" />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please complete input form!</div>
                </div>

                <div className={`input-group ${styles.SignUpInput}`}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">It's not an email. Please complete input form!</div>
                </div>

                <div className={`input-group ${styles.SignUpInput}`}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                    </div>
                    <input type="password" className="form-control is-invalid" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please complete input form!</div>
                </div>

                <div className={`input-group ${styles.SignUpInput}`}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                    </div>
                    <input type="password" className="form-control is-invalid" placeholder=" Confirm password" aria-label="Username" aria-describedby="basic-addon1" />
                    <div className="valid-feedback">Passwords match!</div>
                    <div className="invalid-feedback">Passwords don't match. Please complete input form!</div>
                </div>


                <div className={styles.SignUpCreateAccount}>
                    <p>Do you have an account? <Link to={HOME_PATH}>Login.</Link></p> 
                </div>          

                <div className={styles.SignUpRegisterButtons}> 
                    <button className={`${styles.SignUpButton} ${styles.Register}`}>Create!</button>
                    <button className={`${styles.SignUpButton} ${styles.Cancel}`}>Cancel</button>
                </div>                      
            </div>
        </Template>
    );
};

export default Home;