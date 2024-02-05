const mongoose = require("mongoose");
const { UserInputError } = require("apollo-server");
const { Article } = require("../../models");
const auth = require("../../utils/auth");

module.exports = {
  Mutation: {
    async CreateComment(_, { CreateCommentInput }, context) {
      const user = auth(context);

      const { articleId, comment } = CreateCommentInput;

      const article = await Article.findById(articleId);

      if (!article) {
        throw new UserInputError("article not found");
      }

      if (comment.trim() === "") {
        throw new UserInputError("comment field is empty");
      }

      article.comments.unshift({
        comment: comment,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      article.save();
      return article;
    },

    async DeleteComment(_, { DeleteCommentInput }, context) {
      const user = auth(context);

      const { id, articleId } = DeleteCommentInput;
      
      if(!mongoose.Types.ObjectId.isValid(articleId)){
        throw new UserInputError("id is not valid");
      }

      const article = await Article.findById(articleId);


      if (!article) {
        throw new UserInputError("article not found");
      }

      const commentIndex = article.comments.findIndex(
        (comment) => comment.id === id
      );

      if (commentIndex === -1) {
        throw new UserInputError("comment not found");
      }

      if (article.comments[commentIndex].username !== user.username) {
        throw new UserInputError("comment not found");
      }

      article.comments.splice(commentIndex, 1);
      await article.save();
      return article;
    },
  },
};
