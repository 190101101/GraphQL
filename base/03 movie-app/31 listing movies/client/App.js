import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import MovieList from "./components/MovieList";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:5000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>movie app</h1>
      <MovieList />
    </ApolloProvider>
  );
}

export default App;
