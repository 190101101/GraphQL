const article = require("./article");
const user = require("./user");

module.exports = {
  Query: { ...article.Query, ...user.Query },
};
