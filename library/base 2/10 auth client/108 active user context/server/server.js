require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
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
  context: ({ req }) => ({
    User,
    Snap,
    activeUser: req.activeUser,
  }),
});

const app = express();

app.use(async (req, res, next) => {
  const token = req.headers["authentication"];

  if (token && token !== null) {
    try {
      const activeUser = await jwt.verify(token, process.env.encrypt);
      req.activeUser = activeUser;
      console.log(activeUser);
    } catch (error) {
      console.log(error);
    }
  }
  next();
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`http://localhost:4000/graphql`);
});
