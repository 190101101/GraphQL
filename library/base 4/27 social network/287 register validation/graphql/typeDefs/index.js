const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    articles: [Article]
    users: [User]
  }

  type Article {
    id: ID!
    article: String!
    createdAt: String
    username: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String
    token: String!
    createdAt: String
  }

  input RegisterInput{
    username: String!
    email: String!
    password: String!
    confirm: String!
  }

  type Mutation {
    register(RegisterInput:RegisterInput): User!
  }
`;
