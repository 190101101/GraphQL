require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const { ApolloServer } = require("apollo-server-express");

const type = require("./helpers/type");
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

  app.use(async (req, res, next) => {
    // const token = req.headers["authorization"];

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inp6eiIsImlhdCI6MTcwNTMwNjg1MywiZXhwIjoxNzA1MzEwNDUzfQ.eEeLmzNqr8LrcBl6a5kFQe9yZMR0_NoUkX13O7VtgBg';

    if (token && token !== "null") {
      try{
        const activeUser = await jwt.verify(token, process.env.SECRET_KEY)
        console.log(activeUser);
      }catch(e){
        console.log(e);
      }
    }
    next();
  });

  server.applyMiddleware({ app });

  app.listen({ port: 4001 }, () => {
    console.log(`http://localhost:4001${server.graphqlPath}`);
  });
})();
