module.exports = {
  snap: {
    subscribe: (parent, args, { pubsub }) => {
      return pubsub.asyncIterator("snap");
    },
  },
};
