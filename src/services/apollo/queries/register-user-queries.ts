import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser($name: String) {
    registerUser(name: $name) {
      id
      uid
      email
      name
    }
  }
`;
