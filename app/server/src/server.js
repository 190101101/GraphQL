require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const resolvers = require("./graphql/resolvers/index");
const { User, Snap } = require("./models/index");

mongoose
  .connect(process.env.easysnap)
  .then((response) => console.log("connected to easysnap"))
  .catch((error) => console.log(error));

const server = new ApolloServer({
  typeDefs: importSchema("./src/graphql/schema.graphql"),
  resolvers: resolvers,
  context: { User, Snap },
});

const app = express();

app.use((req, res, next) => {
  const token = req.headers["authentication"];

  if (token && token !== null) {
    console.log(token);
  }

  next();
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`http://localhost:4000/graphql`);
});
