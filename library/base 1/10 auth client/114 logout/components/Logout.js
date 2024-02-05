import React from "react";
import { ApolloConsumer } from "@apollo/client";
import { withRouter } from "react-router-dom";

const Logout = ({ history }) => {
  const onClick = (history, client) => {
    localStorage.setItem("token", "");
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
