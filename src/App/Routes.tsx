import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME_PATH, POKEDEX_PATH } from "../Config/constants/ROUTER_URLs";

import Home from "./Pages/Home";
import Pokedex from "./Pages/Pokedex";
import NotFound from "./Pages/NotFound";

import PrivateRoute from "../Config/PrivateRoute";
// import AuthGate from "./Components/public/AuthGate";

const Routes = () => {

  return (
    <Router>
      {/* <AuthGate> */}
        <Switch>          
          {/* Modules routes */}        
          <PrivateRoute path={POKEDEX_PATH} component={Pokedex} />
          <PrivateRoute path={POKEDEX_PATH + ""} component={Pokedex} />

          {/* Common routes */}
          <Route exact path={HOME_PATH} component={Home} />

          <Route component={NotFound} />
        </Switch>
      {/* </AuthGate> */}
    </Router>
  );
};

export default Routes;
