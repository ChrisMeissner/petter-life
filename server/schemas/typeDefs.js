//import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    phoneNumber: Int
    likedPets: [Pet]
    ownedPets: [Pet]
  }

  type Pet {
    _id: ID
    name: String
    type: String
    age: Int
    gender: String
    fixed: String
    location: Int
    petemail: String
    description: String
  }
  
  type Auth {
    token: ID
    user: User
  }
  
  type Query {
    me: User
    user(_id: ID!): User
    pet(_id: ID!): Pet
    myLikedPets: [Pet]
    myOwnedPets: [Pet]
    pets: [Pet]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(username: String!, password: String!): Auth
    addOwnedPet(name: String!, type: String!, age: Int!, gender: String!, fixed: String!, location: Int!, description: String!, petemail: String!): Pet
    addLikedPet(_id: ID!) : Pet    
    deleteOwnedPet(petId: ID!): User
  }
`;

module.exports = typeDefs;

