module.exports = {
  snap: async (parent, { id }, { Snap }) => {
    const response = await Snap.findById(id);

    if (!response) {
      throw new Error("user not found");
    }

    return response;
  },
  snaps: async (parent, args, { Snap }) => {
    return await Snap.find({}).sort({ createdAt: "desc" });
  },
};
