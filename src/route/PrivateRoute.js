import React from "react";
import { Route, Redirect } from "react-router-dom";

const auth = localStorage.getItem("accessToken");

const PrivateRoute = ({ exact, component: Component, ...rest }) => (
  <Route
    exact={!!exact}
    rest
    render={(props) =>
      auth ? (
        <Component {...props} {...rest}/>
      ) : (
        <Redirect to={`${process.env.PUBLIC_URL}/auth-login`}/>
      )
    }
  />
);

export default PrivateRoute;
