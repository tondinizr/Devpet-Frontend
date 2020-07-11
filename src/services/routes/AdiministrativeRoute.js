import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import SomeSpinner from "../../components/SomeSpinner";

const AdiministrativeRoute = ({ component: Component, ...props }) => {
  const { loading } = useAuth();

  if (loading) {
    return <SomeSpinner />;
  }

  return (
    <Route
      {...props}
      render={() =>
        localStorage.isAdmin === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/cliente" />
        )
      }
    />
  );
};

export default AdiministrativeRoute;
