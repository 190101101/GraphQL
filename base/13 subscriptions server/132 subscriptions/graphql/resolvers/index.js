const Query = require("./queries/Query");
const Snap = require("./queries/Snap");
const User = require("./queries/User");
const Mutation = require("./mutations");

module.exports = {
  Query,
  Snap,
  User,
  Mutation,
  Subscription: {
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
  },
};
