import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation userLogin($_id: String!, $username: String!) {
    userLogin(_id: $_id, username: $username) {
      _id
      username
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($_id: String!, $username: String!) {
    addUser(_id: $_id, username: $username) {
      _id
      username
    }
  }
`;
