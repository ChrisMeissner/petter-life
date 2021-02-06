import gql from "graphql-tag";

export const QUERY_ME = gql`
  {
    me {
      username
      email
      likedPets{
<<<<<<< HEAD
        name
        type
        age
        location
        fixed
      }
       ownedPets{
        name
        type
        age
        location
        fixed
=======
        _id
        name
        type
        age
        gender
        location
        fixed
        petemail
        description
      }
       ownedPets{
         _id
        name
        type
        age
        gender
        location
        fixed
        petemail
        description
>>>>>>> master
      }
    }
  }
`;

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
      _id
      name
      type
      age
      location
      gender
      description
      location
      petemail
      fixed
    }
  }
`;
