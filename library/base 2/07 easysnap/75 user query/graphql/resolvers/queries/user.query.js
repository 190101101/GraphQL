module.exports = {
  user: async (parent, {id}, { User }) => {
    const response = await User.findById(id);

    if (!response) {
      throw new Error("user not found");
    }

    return response;
  },
  users: async (parent, args, { User }) => {
    return await User.find({});
  },
};
