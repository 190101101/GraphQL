import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./components/App";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4001/graphql",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
