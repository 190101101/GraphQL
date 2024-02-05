import React from "react";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: "http://localhost:5000/graphql",
  uri: "http://localhost:5000",
});

const Provider = () => {
  return  (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
};

export default Provider;