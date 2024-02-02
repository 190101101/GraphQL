import React from "react";
import {Redirect} from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import { ACTIVE_USER } from "../graphql/query";

const Auth = condition => Component => props => (
  <Query query={ACTIVE_USER}>
    {
      ({data, loading}) => {
        if(loading) return null;
        return condition(data) ? <Component {...props}/> : <Redirect to="/"/>
      }
    }
  </Query>
);

export default Auth;
