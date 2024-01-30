module.exports = {
  CreateUser: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username });

    if (user) {
      throw new Error("user already exists");
    }

    const response = await new User({ username, password }).save();

    console.log(response);

    return response;
  },
};
