require("dotenv").config();
const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  Query: {
    async users() {
      try {
        return await User.find();
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    async register(_, { RegisterInput: { username, email, password, confirm } }) {
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        username,
        email,
        password,
        createdAt: new Date().toISOString(),
      });

      const response = await newUser.save();

      const token = jwt.sign({
        id: response.id,
        username: response.username,
        email: response.email,
      }, process.env.SECRET_KEY, { expiresIn: '1h'});

      return {
        ...response._doc,
        id:response.id,
        token: token
      };
    },
  },
};
