import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./components/App";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4001/graphql",
  fetchOptions: {
    credentials: "include",
  },
  request: (operation) => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
