const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields:{
    user:{
      type: UserType,
      args:{id:{type:GraphQLString}},
      resolve(parent, args){
        return args
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});
