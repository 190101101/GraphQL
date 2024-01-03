const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const db = require('./helpers/db')();

//dotenv
require('dotenv').config();
const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql:true
}));

app.listen(5000, () => {
    console.log('http://localhost:5000/graphql');
})

