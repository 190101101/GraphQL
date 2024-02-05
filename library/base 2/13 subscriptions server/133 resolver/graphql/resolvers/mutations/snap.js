module.exports = {
  CreateSnap: async (parent, { data: { user_id, text } }, { Snap }) => {
    const response = await new Snap({ user_id, text }).save();
    // console.log(response);
    return response;
  },
};
