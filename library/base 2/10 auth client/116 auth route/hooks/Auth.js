import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ACTIVE_USER } from "../graphql/query";

const Auth = ({ render: Component, ...rest }) => {
  const {
    data: { activeUser },
  } = useQuery(ACTIVE_USER);

  return (
    <Route
      {...rest}
      render={(props) =>
        activeUser == null ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

const UnAuth = ({ render: Component, ...rest }) => {
  const {
    data: { activeUser },
  } = useQuery(ACTIVE_USER);

  return (
    <Route
      {...rest}
      render={(props) =>
        activeUser != null ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export { Auth, UnAuth };
