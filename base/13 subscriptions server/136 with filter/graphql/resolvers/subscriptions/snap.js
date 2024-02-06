const { withFilter } = require("apollo-server");

module.exports = {
  snap: {
    subscribe: (parent, args, { pubsub }) => {
      return pubsub.asyncIterator("snap");
    },
  },
  filterSnap: {
    subscribe: withFilter(
      (parent, args, { pubsub }) => {
        return pubsub.asyncIterator("filterSnap");
      },
      (payload, variables) => {
        return variables.userId
          ? String(payload.filterSnap.user_id) === variables.userId
          // ? String(payload.filterSnap.user_id) !== variables.userId
          : true;
      }
    ),
  },
};
