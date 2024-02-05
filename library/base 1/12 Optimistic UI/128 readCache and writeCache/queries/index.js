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

export const GET_ACTIVE_USER = gql`
  query {
    activeUser {
      id
      username
      createdAt
      snaps {
        text
        createdAt
      }
    }
  }
`;

export const GET_SNAPS = gql`
  query {
    snaps {
      id
      text
      createdAt
      user {
        id
        username
      }
    }
  }
`;

export const ADD_SNAP = gql`
  mutation ($text: String!, $user_id: ID!) {
    createSnap(data: { text: $text, user_id: $user_id }) {
      id
      text
      createdAt
      user{
        id
        username
      }
    }
  }
`;
