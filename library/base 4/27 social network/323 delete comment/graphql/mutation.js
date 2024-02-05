import { gql } from "@apollo/client";

export const mutationRegister = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirm: String!
  ) {
    register(
      RegisterInput: {
        username: $username
        email: $email
        password: $password
        confirm: $confirm
      }
    ) {
      id
      username
      email
      password
      token
      createdAt
    }
  }
`;

export const mutationLogin = gql`
  mutation login($username: String!, $password: String!) {
    login(LoginInput: { username: $username, password: $password }) {
      id
      username
      email
      password
      token
      createdAt
    }
  }
`;

export const MutationCreateArticle = gql`
  mutation CreateArticle($article: String!) {
    CreateArticle(CreateArticleInput: { article: $article }) {
      id
      article
      createdAt
      username
    }
  }
`;

export const MutationLikeArticle = gql`
  mutation LikeArticle($id: ID!) {
    LikeArticle(LikeArticleInput: { id: $id }) {
      id
      likeCount
      likes {
        id
        username
      }
    }
  }
`;

export const MutationDeleteArticle = gql`
  mutation DeleteArticle($id: ID!) {
    DeleteArticle(DeleteArticleInput: { id: $id }) {
      id
    }
  }
`;

export const MutationCreateComment = gql`
  mutation CreateComment($articleId: ID!, $comment: String!) {
    CreateComment(
      CreateCommentInput: { articleId: $articleId, comment: $comment }
    ) {
      id
      article
      createdAt
      username
      commentCount
      likeCount
      comments {
        id
        comment
        username
        createdAt
      }
      likes {
        username
      }
    }
  }
`;

export const MutationDeleteComment = gql`
  mutation DeleteComment($id: ID!, $articleId: ID!) {
    DeleteComment(DeleteCommentInput: { id: $id, articleId: $articleId }) {
      id
    }
  }
`;
