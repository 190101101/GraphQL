const fs = require("fs");
const path = require("path");

const graphMap = [`user.graphql`, `snap.graphql`, `token.graphql`];

const types = graphMap.map((row) => {
  return fs.readFileSync(path.resolve(__dirname, `../graphql/types/${row}`), {
    encoding: "utf-8",
  });
});

module.exports = [types];
