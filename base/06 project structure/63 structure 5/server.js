const fs = require("fs");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers/index");
const db = require("./data");

const typeDefs = fs.readFileSync(`${__dirname}/graphql/schema/schema.graphql`, {
  encoding: "utf-8",
});

const server = new ApolloServer({
  typeDefs,
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
