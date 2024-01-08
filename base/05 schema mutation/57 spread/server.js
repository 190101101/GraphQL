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
    createMovie(
      title: String!
      description: String
      year: Int!
      directorId: ID!
    ): Movie!
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
        id: Math.random().toString(36).substring(2, 10),
        ...args
      };

      directors.push(newDirector);
      return newDirector;
    },
    createMovie: (parent, args) => {
      const directorExists = directors.some(
        (director) => director.id === args.directorId
      );
      if (!directorExists) {
        throw new Error("director doet not exists");
      }

      const newMovie = {
        id: Math.random().toString(36).substring(2, 10),
        ...args
      };

      movies.push(newMovie);
      return newMovie;
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
    console.log(`http://localhost:4000${server.graphqlPath}`);
  });
})();

