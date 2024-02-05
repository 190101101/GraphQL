import { gql } from "@apollo/client";

const JOIN = gql`
  subscription {
    user {
      id
      username
      createdAt
    }
  }
`;

export { JOIN };
