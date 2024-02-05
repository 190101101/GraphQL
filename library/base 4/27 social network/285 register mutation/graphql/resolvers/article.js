const { Article } = require("../../models");

module.exports = {
    Query: {
      async articles() {
        try {
          return await Article.find();
        } catch (error) {
          throw new Error(error);
        }
      },
    },
  };
  