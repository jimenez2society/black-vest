const User = require("../models/User");

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return [];
    },
  },
  Mutation: {
    createUser: async (_, { userInput }) => {
      let user = new User(userInput);
      await user.save();
      return user;
    },
  },
};
module.exports = resolvers;
