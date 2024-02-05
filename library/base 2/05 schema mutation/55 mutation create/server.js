const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { movies, directors } = require("./data");

const typeDefs = gql`
  type Query {
    directors: [Director!]!
    movies: [Movie!]!
    director(id: ID!, name: String): Director!
    movie(id: ID): Movie!
  }

  type Mutation {
    createDirector(name: String!, birth: Int): Director!
  }

  type Director {
    id: ID!
    name: String!
    birth: Int
    movies: [Movie!]!
  }

  type Movie {
    id: ID!
    title: String!
    description: String!
    year: Int!
    director: Director!
  }
`;

const resolvers = {
  Query: {
    directors: () => directors,
    movies: () => movies,
    director: (parent, args) => {
      return directors.find((director) => director.id === args.id);
    },
    movie: (parent, args) => {
      return movies.find((movie) => movie.id === args.id);
    },
  },
  Mutation: {
    createDirector: (parent, args) => {
      const newDirector = {
        id:Math.random().toString(36).substring(2, 10),
        name:args.name,
        birth:args.birth,
      };

      directors.push(newDirector);
      console.log(newDirector);
    },
  },
  Movie: {
    director: (parent, args) => {
      return directors.find((director) => director.id === parent.directorId);
    },
  },
  Director: {
    movies: (parent, args) => {
      return movies.filter((movie) => movie.directorId === parent.id);
    },
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
