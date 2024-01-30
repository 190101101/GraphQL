const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

module.exports = {
  user: (parent, args) => {
    return {
      username: "cookie",
      password: "cashcasapdaj",
      createdAt: "30.01.2024",
    };
  },
  users: async (parent, args, { User }) => {
    return await User.find({});
  },
};
