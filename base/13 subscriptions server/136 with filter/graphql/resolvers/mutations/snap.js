module.exports = {
  CreateSnap: async (parent, { data: { user_id, text } }, { Snap, pubsub }) => {
    const response = await new Snap({ user_id, text }).save();

    pubsub.publish('snap', {
      snap: response
    });

    pubsub.publish('filterSnap', {
      filterSnap: response
    });
    
    console.log(response);
    return response;
  },
  DeleteSnaps: async (_, __, {Snap}) => {
    try {
      const result = await Snap.deleteMany();
      console.log(result);
      return {
        success: true,
        message: `${result.deletedCount} items deleted successfully.`,
      };
    } catch (error) {
      console.error("Error deleting items:", error);
      return {
        success: false,
        message: "Error deleting items.",
      };
    }
  },
};
