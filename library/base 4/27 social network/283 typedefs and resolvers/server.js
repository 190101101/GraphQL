require("dotenv").config();
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const { User, Article } = require("./models");

mongoose
  .connect(process.env.MONGO_DB)
  .then((res) => console.log("server connected to db"))
  .catch((error) => console.log("something wrong"));

const typeDefs = gql`
  type Query {
    articles: [Article]
  }

  type Article {
    id: ID!
    article: String!
    createdAt: String
    username: String!
  }
`;

const resolvers = {
  Query: {
    async articles() {
      try {
        return await Article.find();
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 5000 }).then((response) => {
  console.log(response.url);
});
