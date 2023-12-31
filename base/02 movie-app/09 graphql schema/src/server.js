const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;

const app = express();

app.use('/graphql', expressGraphQL({}));

app.listen(5000, () => {
    console.log('http://localhost:5000/graphql');
})