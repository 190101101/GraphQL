require("dotenv").config();
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

mongoose
.connect(process.env.MONGO_DB)
.then((res) => console.log("server connected to db"))
.catch((error) => console.log("something wrong"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 5000 }).then((response) => {
  console.log(response.url);
});
