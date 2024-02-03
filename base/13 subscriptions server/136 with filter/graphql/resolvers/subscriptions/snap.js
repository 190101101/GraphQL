const { withFilter } = require("apollo-server");

module.exports = {
  SnapAdded: {
    subscribe: withFilter(
      (parent, args, { pubsub }) => {
        return pubsub.asyncIterator("SnapAdded");
      },
      (payload, variables) => {
        console.log(payload, variables);

        return variables.userId
          ? String(payload.SnapAdded.user_id) === variables.userId
          : true;
      }
    ),
  },
};
