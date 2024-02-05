const { UserInputError } = require("apollo-server");
const { Comment, Article } = require("../../models");
const auth = require("../../utils/auth");

module.exports = {
  Mutation: {
    async CreateComment(_, { CreateCommentInput }, context) {
      const user = auth(context);

      const { articleId, comment } = CreateCommentInput;

      const article = await Article.findById(articleId);
      
      if (!article) {
        throw new UserInputError("article not found", {
          articleId: "article not found",
        });
      }
      
      if (comment.trim() === "") {
        throw new UserInputError("comment field is empty", {
          articleId: "comment field is empty",
        });
      }

      article.comments.unshift({
        comment: comment,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      article.save();
      return article;
    },
  },
};
