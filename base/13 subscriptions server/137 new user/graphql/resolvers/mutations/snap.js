module.exports = {
  CreateSnap: async (parent, { data: { user_id, text } }, { Snap, pubsub }) => {
    try {
      const response = await new Snap({ user_id, text }).save();
      
      pubsub.publish("snap", {
        snap: response,
      });
      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
