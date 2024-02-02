require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const resolvers = require("./graphql/resolvers/index");
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const { User, Snap } = require("./models/index");

mongoose
  .connect(process.env.easysnap)
  .then((response) => console.log("connected to easysnap"))
  .catch((error) => console.log(error));

const server = new ApolloServer({
  typeDefs: importSchema("./src/graphql/schema.graphql"),
  resolvers: resolvers,
  context: ({ req }) => ({
    activeUser: req.activeUser, User, Snap,
  }),
});

const app = express();

app.use((req, res, next) => {
  const token = req.headers["authentication"];

  if (token && token.length > 10 && token !== null) {
    try {
      req.activeUser = jwt.verify(
        token,
        process.env.encrypt,
        (err, decoded) => {
          return decoded;
        }
      );
    } catch (error) {}
  }
  next();
});

server.applyMiddleware({ app });

app.listen({ port: process.env.port }, () => {
  console.log(`http://localhost:${process.env.port}/graphql`);
});
