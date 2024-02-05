import React from "react";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink  } from "@apollo/client";

const httpLink = new HttpLink({ uri: 'http://localhost:5000' });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

const Provider = () => {
  return  (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
};

export default Provider;