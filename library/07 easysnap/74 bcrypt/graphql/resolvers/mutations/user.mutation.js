module.exports = {
  createUser: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username });

    if (user) {
      throw new Error("user is already hav.");
    }

    return await new User({
      username,
      password,
    }).save();
  },
};
