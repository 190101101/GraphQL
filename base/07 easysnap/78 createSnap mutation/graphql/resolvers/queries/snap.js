module.exports = {
  snap: async (parent, args, { Snap }) => {
    return await Snap.findById(args.id);
  },
  snaps: async (parent, args, {Snap}) => {
    return await Snap.find({}).sort({'createdAt':'desc'});
  },
};
