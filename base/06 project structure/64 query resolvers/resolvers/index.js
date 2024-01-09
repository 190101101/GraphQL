//query resolvers
const Query = require("./query/Query");
const Movie = require("./query/Movie");
const Director = require("./query/Director");

//mutation resolvers
const Mutation = require("./mutation");

module.exports = { Query, Mutation, Movie, Director};