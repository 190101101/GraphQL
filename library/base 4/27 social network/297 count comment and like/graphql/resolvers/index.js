const article = require("./article");
const user = require("./user");
const comment = require("./comment");

module.exports = {
  Article: {
    ...article.Article,
  },
  Query: {
    ...article.Query,
    ...user.Query,
  },

  Mutation: {
    ...user.Mutation,
    ...article.Mutation,
    ...comment.Mutation,
  },
  Subscription: {
    ...article.Subscription,
  },
};
