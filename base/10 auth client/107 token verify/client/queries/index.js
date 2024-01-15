import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation ($username: String!, $password: String!) {
    createUser(data: { username: $username, password: $password }) {
      token
    }
  }
`;

export const SIGN_IN = gql`
  mutation ($username: String!, $password: String!) {
    signIn(data: { username: $username, password: $password }) {
      token
    }
  }
`;
