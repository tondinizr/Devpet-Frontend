import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import SomeSpinner from "../../components/SomeSpinner";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { loading } = useAuth();

  if (loading) {
    return <SomeSpinner />;
  }

  return (
    <Route
      {...props}
      render={() =>
        localStorage.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
