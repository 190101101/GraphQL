const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const resolvers = require("./graphql/resolvers/index");

const server = new ApolloServer({
  typeDefs: importSchema("./src/graphql/schema.graphql"),
  resolvers:resolvers,
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`http://localhost:4000/graphql`));
