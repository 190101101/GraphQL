import { ApolloClient, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  url: "http://localhost:5000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>movie app</h1>
    </ApolloProvider>
  );
}

export default App;
