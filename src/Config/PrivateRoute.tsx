import React from "react";
import { Route } from "react-router-dom";
import NotFound from "../App/Pages/NotFound";

interface IPrivateRoute {
  path: string;
  component: any;
}

const PrivateRoute = ({ component: Component, ...rest }: IPrivateRoute) => {

  const canAccessPath = true;

  window.history.replaceState({}, document.title, "/");

  return (
    <Route
      {...rest}
      render={props =>
        (canAccessPath) ? (
          <Component {...props} />
        ) : (
            <Route component={NotFound} />
          )
      }
    />
  );
};

export default PrivateRoute;