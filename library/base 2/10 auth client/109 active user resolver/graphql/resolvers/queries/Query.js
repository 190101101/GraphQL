module.exports = {
  user: async (parent, { id }, { User }) => {
    return await User.findById(id);
  },
  users: async (parent, args, { User }) => {
    return await User.find({}).sort({ createdAt: "desc" });
  },
  activeUser: async (parent, args, { activeUser, User }) => {
    return await User.findOne({ username: activeUser.username });
  },
  snap: async (parent, args, { Snap }) => {
    return await Snap.findById(args.id);
  },
  snaps: async (parent, args, { Snap }) => {
    return await Snap.find({}).sort({ createdAt: "desc" });
  },
};
