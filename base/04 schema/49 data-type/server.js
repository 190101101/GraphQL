const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

// String, Int,ID, Boolean, Float

const typeDefs = gql`
  type Query {
    id: ID!
    name: String!
    surname: String
    age: Int
    isAdmin: Boolean
    score: Float
  }
`;

const resolvers = {
  Query: {
    id: () => 'nv2380bn23vrt807',
    name: () => "cookie",
    surname: () => "cookies",
    age: () => "7",
    isAdmin: () => true,
    score: () => 1.608,
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
