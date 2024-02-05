const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql");

let userData = [];

for (let i = 0; i < 10; i++) {
  userData.push({
    id: i,
    name: `name ${i}`,
    email: `email_${i}@gmail.com`,
    age: Math.trunc(Math.random() * 70),
  });
}

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return userData.find(
          (user) => user.id.toString() === args.id.toString()
        );
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    CreateUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const newUser = {
          id: 7777,
          ...args,
        };
        userData.push(newUser);
        return newUser;
      },
    },
    DeleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const deletedUser = userData[args.id];
        userData = userData.filter(
          (user) => user.id.toString() !== args.id.toString()
        );
        return deletedUser;
      },
    },
    UpdateUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const foundIndex = userData.findIndex(
          (user) => user.id.toString() === args.id.toString()
        );

        if (foundIndex !== -1) {
          userData[foundIndex].name = args.name;
          userData[foundIndex].email = args.email;
          userData[foundIndex].age = args.age;
        }

        return userData[foundIndex];
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
