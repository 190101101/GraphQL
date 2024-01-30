import React from 'react'
import { Query } from "@apollo/client/react/components";
import { GET_ACTIVE_USER } from "../queries/index.js";
import { Redirect } from "react-router-dom";

const Auth = condition => Component => props => (
  <Query query={GET_ACTIVE_USER}>
    {
      ({data, loading}) => {
        if(loading) return null;

        return condition(data) ? <Component {...props}/> : <Redirect to="/"/>
      }
    }
  </Query>
);

export default Auth