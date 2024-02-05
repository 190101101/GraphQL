module.exports = {
  user: async (parent, { id }, { User }) => {
    return await User.findById(id);
  },
  users: async (parent, args, { User }) => {
    return await User.find({}).sort({ createdAt: "desc" });
  },
  snap: async (parent, args, { Snap }) => {
    return await Snap.findById(args.id);
  },
  snaps: async (parent, args, { Snap }) => {
    return await Snap.find({}).sort({ createdAt: "desc" });
  },
};
