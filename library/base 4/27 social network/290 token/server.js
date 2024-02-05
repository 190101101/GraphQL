require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB)
  .then((res) => console.log("server connected to db"))
  .catch((error) => console.log("something wrong"));

const server = new ApolloServer({
  typeDefs, resolvers,
});

server.listen({ port: 5000 }).then((response) => {
  console.log(`${response.url}graphql`);
});


