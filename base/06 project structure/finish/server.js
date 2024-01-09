const fs = require("fs");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./graphql/resolvers/index");
const db = require("./data");

const movieRow = `${__dirname}/graphql/Types/movie.graphql`;
const directorRow = `${__dirname}/graphql/Types/director.graphql`;

const movieTypes = fs.readFileSync(movieRow, { encoding: "utf-8" });
const directorTypes = fs.readFileSync(directorRow, { encoding: "utf-8" });

const server = new ApolloServer({
  typeDefs: [movieTypes, directorTypes],
  resolvers,
  context: {
    db,
  },
});

(async () => {
  await server.start();
  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`http://localhost:4000${server.graphqlPath}`);
  });
})();
