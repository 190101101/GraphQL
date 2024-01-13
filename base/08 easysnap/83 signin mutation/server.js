require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const type = require("./graphql/types/type");
const resolvers = require("./graphql/resolvers/resolvers");
const { User, Snap } = require("./models/model");

const server = new ApolloServer({
  typeDefs: type,
  resolvers,
  context: { User, Snap },
});

mongoose
  .connect(process.env.MONGO_DB, { useNewUrlParser: true })
  .then(() => console.log("connected to mongodb"))
  .catch((e) => console.log(e));

(async () => {
  await server.start();

  const app = express();
  server.applyMiddleware({ app });
  app.listen({ port: 4001 }, () => {
    console.log(`http://localhost:4001${server.graphqlPath}`);
  });
})();
