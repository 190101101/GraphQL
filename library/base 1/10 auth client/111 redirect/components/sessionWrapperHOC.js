import React from "react";
import { Query } from "@apollo/client/react/components";
import { GET_ACTIVE_USER } from "../queries/index";

const sessionWrapperHOC = (Component) => (props) =>
  (
    <Query query={GET_ACTIVE_USER}>
      {({ data, loading }) => {
        if (loading) {
          return <div style={{ textAlign: "center" }}>Loading...</div>;
        }

        console.log(data);

        return <Component props={props}/>;
      }}
    </Query>
  );

export default sessionWrapperHOC;
