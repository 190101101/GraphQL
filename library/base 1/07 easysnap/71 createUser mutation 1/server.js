require("dotenv").config();
const fs = require("fs");
const mongoose = require("mongoose");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./graphql/resolvers/index");

const types = [`${__dirname}/graphql/types/user.graphql`].map((rows) =>
  fs.readFileSync(rows, { encoding: "utf-8" })
);

const server = new ApolloServer({
  typeDefs: [types],
  resolvers,
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
