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
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      const response = await save.save();

      return response;
    },
    async DeleteArticle(_, { DeleteArticleInput }, context) {
      const user = auth(context);
      const article = await Article.findOne({
        _id: DeleteArticleInput.id,
        username: user.username,
      });

      if (!article) {
        throw new Error("article not found");
      }

      const response = await Article.deleteOne({
        _id: DeleteArticleInput.id,
      });

      return article;
    },
  },
};
