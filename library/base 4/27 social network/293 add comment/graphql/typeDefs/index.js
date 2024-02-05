const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    articles: [Article]
    users: [User]
    article(id:ID!): Article!
  }

  type Article {
    id: ID!
    article: String!
    createdAt: String
    username: String!
    comments: [Comment]!
  }

  type Comment {
    id: ID!
    comment: String!
    username: String! 
    createdAt:String!
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

  input LoginInput{
    username: String!
    password: String!
  }

  input CreateArticleInput{
    article: String!
  }

  input DeleteArticleInput{
    id: String!
  }

  input CreateCommentInput{
    articleId: String!
    comment: String!
  }

  type Mutation {
    register(RegisterInput:RegisterInput): User!
    login(LoginInput:LoginInput): User!
    CreateArticle(CreateArticleInput:CreateArticleInput): Article!
    DeleteArticle(DeleteArticleInput:DeleteArticleInput): Article!
    CreateComment(CreateCommentInput:CreateCommentInput): Article!
  }
`;
