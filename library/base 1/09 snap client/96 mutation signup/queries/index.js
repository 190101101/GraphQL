import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation ($username: String!, $password: String!) {
    createUser(data: { username: $username, password: $password }) {
      token
    }
  }
`;
