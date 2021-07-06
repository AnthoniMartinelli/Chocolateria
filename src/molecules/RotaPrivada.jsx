/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { contexto } from "../atoms/firebase";

// eslint-disable-next-line react/prop-types
const RotaPrivada = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(contexto);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default RotaPrivada();
