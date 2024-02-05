import React from "react";
import { withRouter } from "react-router-dom";
import { ApolloConsumer } from "@apollo/client";

const Logout = ({ history }) => {
  const onClick = (history, client) => {
    localStorage.removeItem("token");
    history.push("/");
    client.resetStore();
  };

  return (
    <ApolloConsumer>
      {(client) => {
        console.log(client);
        return <button onClick={() => onClick(history, client)}>logout</button>;
      }}
    </ApolloConsumer>
  );
};

export default withRouter(Logout);
