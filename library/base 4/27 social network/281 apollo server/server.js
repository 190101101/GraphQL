require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    firstQuery: String!
  }
`;

const resolvers = {
  Query: {
    firstQuery: () => "first query",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 5000 }).then((response) => {
  console.log(response.url);
});

// console.log(process.env.MONGO_DB);
