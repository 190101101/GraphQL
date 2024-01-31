import { gql } from "@apollo/client";

const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    SignIn(data: { username: $username, password: $password }) {
      token
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!
    $password: String!
  ) {
    CreateUser(
      data: { username: $username, password: $password}
    ) {
      token
    }
  }
`;

export { SIGN_IN, CREATE_USER };
