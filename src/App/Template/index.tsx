import React, { useContext, useEffect } from "react";
import { __RouterContext } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import imgPokemonLogo from "../../Assets/Pokemon_logo.svg";

import { HOME_PATH, SIGNUP_PATH, POKEDEX_PATH } from "../../Config/constants/ROUTER_URLs";

import styles from "./Template.module.scss";

const useRouter = () => useContext(__RouterContext);


const Template: React.FC = (props: any) => {
  
  const router = useRouter();
  const paths = router.location.pathname;   

  let button = <Link to={SIGNUP_PATH} className={`btn my-2 my-sm-0 ${styles.NavButtonLogOut}`} >Sign Up</Link>;

  useEffect(() => {      
    if (paths.includes(POKEDEX_PATH)) {
      button = <Link to={HOME_PATH} className={`btn my-2 my-sm-0 ${styles.NavButtonLogOut}`} >Log out</Link>;
    }
    else if ( paths.includes(SIGNUP_PATH)) {
      button = <Link to={HOME_PATH} className={`btn my-2 my-sm-0 ${styles.NavButtonLogOut}`} >Sign up</Link>
    }
    else{
      button = <Link to={SIGNUP_PATH} className={`btn my-2 my-sm-0 ${styles.NavButtonLogOut}`} >Sign in</Link>
    }
  }, [paths])

  return (
    <div style={{ minHeight: "100vh" }}>        
      <nav className={`navbar fixed-top navbar-expand-lg bg-light ${styles.Nav}`}>
        <Link to="/" >Pokedex</Link>
        <img src={imgPokemonLogo} alt="Pokemon logo" />

        <button className={`navbar-toggler ${styles.NavButtonToggler}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`collapse navbar-collapse ${styles.NavCollapsedMenu}`} id="navbarSupportedContent">                      
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li> */}
          </ul>
          { button }
        </div>
      </nav>

        
      { /* CONTENT */ }
      <div className={styles.Content}>
        {props.children}

        <div className={styles.Footer}>
          <hr />
          <div className={styles.FooterHeader}>Yuxi Global. Copyright © 2019</div>
          <div className={styles.FooterCaption}>Todos los derechos reservados.</div>
        </div>
      </div>
      { /* FOOTER */ }
      
    </div>
  );
};

export default Template;
