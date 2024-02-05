import { gql } from "@apollo/client";

export const queryArticles = gql`
  query {
    articles {
      id
      article
      createdAt
      username
      commentCount
      likeCount
      comments {
        comment
        username
        createdAt
      }
    }
  }
`;
