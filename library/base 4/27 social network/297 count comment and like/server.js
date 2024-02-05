require("dotenv").config();
const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

mongoose
  .connect(process.env.MONGO_DB)
  .then((res) => console.log("server connected to db"))
  .catch((error) => console.log("something wrong"));

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

server.listen({ port: 5000 }).then((response) => {
  console.log(`${response.url}graphql`);
});
