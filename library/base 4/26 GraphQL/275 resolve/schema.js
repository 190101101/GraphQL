const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
} = require("graphql");


const userData = [];

for(let i = 0; i < 10; i++){
  userData.push({
    id: i,
    name: `name ${i}`,
    email: `email_${i}@gmail.com`,
    age: Math.trunc(Math.random() * 70),
  })
}

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
      args:{
        id:{type:GraphQLString},
        name:{type:GraphQLString},
      },
      resolve(parent, args){
        console.log(args.id);
        return userData[args.id];
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});
