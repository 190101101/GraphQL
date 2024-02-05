const fs = require("fs");

const types = [`user.graphql`, `snap.graphql`, `token.graphql`].map((row) =>
  fs.readFileSync(`${__dirname}/${row}`, { encoding: "utf-8" })
);

module.exports = [types];
