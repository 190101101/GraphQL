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
    async article(_, { id }) {
      try {
        const response = await Article.findById(id);
        if (response) {
          return response;
        } else {
          throw new Error("article not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
