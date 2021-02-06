import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

//mutation for when a NEW user signs up - use on signup page
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_OWNED_PET = gql`
  mutation addOwnedPet($name: String!, $type: String!, $age: Int!, $fixed: String!, $location: Int!, $description: String!, $gender: String!, $petemail: String!) {
    addOwnedPet(name: $name, type: $type, age: $age, fixed: $fixed, location: $location, description: $description, gender: $gender, petemail: $petemail) {
      name
      type
      description
      location
      age
      petemail
      gender
      fixed
    }
  }
`;

export const ADD_LIKED_PET = gql`
  mutation addLikedPet($_id: ID!) {
    addLikedPet(_id: $_id) {
      name
      type
      description
      location
      age
      gender
      petemail
      fixed
    }
  }
`;
