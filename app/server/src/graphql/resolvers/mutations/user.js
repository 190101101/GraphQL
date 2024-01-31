require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  CreateUser: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username });

    if (user) {
      throw new Error("user already exists");
    }

    const response = await new User({ username, password }).save();

    console.log(response);

    return response;
  },
  SignIn: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("user not found");
    }

    const hash = await bcrypt.compare(password, user.password);

    if (!hash) {
      throw new Error("password is wrong");
    }

    return { token: 'zxczxxcxzc' };
  },
};
