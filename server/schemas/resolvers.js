const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      return user.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, userNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`user${userNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;