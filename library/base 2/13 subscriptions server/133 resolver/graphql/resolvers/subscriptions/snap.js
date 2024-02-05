module.exports = {
  count: {
    subscribe: (parent, args, { pubsub }) => {
      let = p1 = 5;

      setInterval(() => {
        count = p1 * Math.round(Math.random() * 100);
        pubsub.publish("count", {
          count,
        });
      }, 1000);

      return pubsub.asyncIterator("count");
    },
  },
};
