const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema");
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql:true
}));

app.get("/", (req, res) => {
  res.send("hello server");
});

app.listen(3000, () => console.log(`http://localhost3000`));
