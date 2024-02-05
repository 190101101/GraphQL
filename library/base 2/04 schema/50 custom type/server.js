const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

// String, Int,ID, Boolean, Float

const typeDefs = gql`
  type Query {
    director: Director!
    movie: Movie!
  }

  type Director{
    id: ID!
    name: String!
    age: Int
  }

  type Movie{
    id: ID!
    title: String!
    year: Int!
  }
`;

const resolvers = {
  Query: {
    director: () => ({
      id:'nfv0239vu',
      name:'cookie',
      age:7
    }),
    movie: () => ({
      id:'2mn23vr8s',
      title:'fight club',
      year:1999
    }),
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
