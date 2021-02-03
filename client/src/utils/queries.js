import gql from "graphql-tag";

export const QUERY_USER = gql`
  {
    user {
      username
      email
      phoneNumber
      likedPets
      ownedPets
    }
  }
`;

export const QUERY_PETS = gql`
  {
    pets {
      name
      type
      age
      location
      gender
      description
      location
      fixed
    }
  }
`;
