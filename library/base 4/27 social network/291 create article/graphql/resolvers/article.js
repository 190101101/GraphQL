const { Article } = require("../../models");
const auth = require("../../utils/auth");

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

  Mutation: {
    async CreateArticle(_, { CreateArticleInput }, context) {
      const user = auth(context);

      const save = await Article.create({
        article: CreateArticleInput.article,
        user:user.id,
        username:user.username,
        createdAt: new Date().toISOString()
      });

      const response = await save.save();

      return response;
    },
  },
};
