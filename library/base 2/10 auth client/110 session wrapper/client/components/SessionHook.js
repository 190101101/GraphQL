import React from "react";
import { Query } from "@apollo/client/react/components";
import { ACTIVE_USER } from "../graphql/query";

const SessionHook = (Component) => (props) =>
  (
    <Query query={ACTIVE_USER}>
      {({ data, loading }) => {
        if (loading) return <div className="loading">loading...</div>;
        console.log(data);
        return <Component>{props}</Component>;
      }}
    </Query>
  );

export default SessionHook;
