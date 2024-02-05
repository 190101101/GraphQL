const {graphqlHTTP} = require('express-graphql');
const express = require('express');
const schema = require('./schema');
const app = express();

app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true
}));

app.listen(4001, () => console.log(`http://localhost:4001/graphql`));