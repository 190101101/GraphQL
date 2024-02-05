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
  mutation login(
    $username: String!
    $password: String!
  ) {
    login(
      LoginInput: {
        username: $username
        password: $password
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
