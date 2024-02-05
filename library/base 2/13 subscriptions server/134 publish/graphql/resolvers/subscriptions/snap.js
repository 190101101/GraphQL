module.exports = {
  count: {
    subscribe: (parent, args, { pubsub }) => {
      return pubsub.asyncIterator("count");
    },
  },
};
