const { AuthenticationError } = require("apollo-server-express");
const { parseType } = require("graphql");
const { User, Pet } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },

    pet: async (parent, { _id }) => {
      return await Pet.findById(_id);
    },

    pets: async () => {
      // const params = username ? { username } : {};
      return await Pet.find();
    },

    myLikedPets: async (_, args, context) => {

        if (context.user) {
          const user = await User.findById(context.user._id);
         return user.likedPets
        } 
        throw new AuthenticationError("Not logged in");
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addOwnedPet: async (_, args, context) => {
      //check if user is logged in
      console.log("context", context.user);

      if (context.user) {
        try {
          // changed from `const ownedPet` because we are just creating a new pet here
          // that needs to be accessed by the dashboard for all users
          const pet = await Pet.create({
            ...args,
            username: context.user.username,
          });

          console.log("new owned pet as pet:", pet);

          const user = await User.findByIdAndUpdate(
            { _id: context.user._id },
            // here is where we are specifying that the new pet belongs to someone's ownedPets array
            { $push: { ownedPets: pet } },
            { new: true }
          );
          
          // this should now log the user with a populated ownedPets array
          // that includes all data for each ownedPet
          console.log("user", user);
          
          return pet;
       
        } catch (e) {
          console.log(e);
        }
      }
    },

    //add a liked pet to a user's model when they like a pet
    addLikedPet: async (parent, { _id }, context) => {
      if (context.user) {

        const pet = await Pet.findById( _id );
        
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { likedPets: pet } },
          { new: true }
        );
        console.log("user liked a pet", user);
        return pet;
      } else {
        return("You must be logged in to like a pet!");
      }
    },

    deleteOwnedPet: async (_, args, context) => {
      //check if user is logged in
      console.log("context", context.user);
      console.log(args);
      if (context.user) {
        try {
          const deletedPet = await Pet.deleteOne({
            _id: args.petId
          });

          // console.log("deleted pet", deletedPet);

          const user = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { ownedPets :{
              _id: args.petId
            }} },
            { new: true }
          ).lean()

          console.log("user", user);
         

          return user;

          // ._doc to get raw data from object
          // return { ...pet._doc };
        } catch (e) {
          console.log(e);
        }
      }
    },
  },

};



module.exports = resolvers;
