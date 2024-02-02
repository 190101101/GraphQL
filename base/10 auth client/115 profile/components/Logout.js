import React from "react";
import { withRouter } from "react-router-dom";
import { ApolloConsumer } from "@apollo/client";

const Logout = ({ history }) => {
  const onClick = (client, history) => {
    client.resetStore();
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <ApolloConsumer>
      {(client) => {
        console.log(client);
        return <button onClick={() => onClick(client, history)}>logout</button>;
      }}
    </ApolloConsumer>
  );
};

export default withRouter(Logout);
