const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    name: String
    surname: String
    age: Int
  }
`;

const resolvers = {
  Query: {
    name: () => "cookie",
    surname: () => "cookies",
    age: () => "7",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  await server.start();
  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
})();
