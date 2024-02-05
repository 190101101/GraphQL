const { User } = require("../../models");

module.exports = {
    Query: {
      async users() {
        try {
          return await User.find();
        } catch (error) {
          throw new Error(error);
        }
      },
    },

    Mutation:{
      async register(parent, args){
      }
    }
  };
  