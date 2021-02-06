import gql from "graphql-tag";

export const QUERY_ME = gql`
  {
    me {
      username
      email
      likedPets{
<<<<<<< HEAD
<<<<<<< HEAD
=======
        _id
>>>>>>> ea0aadcc16ee394d438da6294bc85b93334d50ce
        name
        type
        age
        gender
        location
        fixed
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
<<<<<<< HEAD
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
=======
        description
>>>>>>> ea0aadcc16ee394d438da6294bc85b93334d50ce
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
