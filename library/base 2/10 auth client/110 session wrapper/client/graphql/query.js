import { gql } from "@apollo/client";

const ACTIVE_USER = gql`
  query{
    activeUser{
      id
      username
      createdAt
      snaps{
        id
        text
        createdAt
      }
    }
  }
`;

export { ACTIVE_USER };
