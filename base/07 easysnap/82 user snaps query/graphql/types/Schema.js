const fs = require("fs");

const types = [`${__dirname}/user.graphql`, `${__dirname}/snap.graphql`].map(
  (rows) => fs.readFileSync(rows, { encoding: "utf-8" })
);

module.exports = [types];
