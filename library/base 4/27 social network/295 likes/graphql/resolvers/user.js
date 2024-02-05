require("dotenv").config();

const { UserInputError } = require("apollo-server");
const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../utils/validators");

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
    async register(_, { RegisterInput }) {
      const { errors, valid } = validateRegisterInput(RegisterInput);

      const { username, email, password } = RegisterInput;

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const hasUser = await User.findOne({ username });

      if (hasUser) {
        throw new UserInputError("Errors", {
          errors: { username: "username is already have in db" },
        });
      }

      const newUser = new User({
        username,
        email,
        password: await bcrypt.hash(password, 12),
        createdAt: new Date().toISOString(),
      });

      const response = await newUser.save();

      const token = jwt.sign(
        {
          id: response.id,
          username: response.username,
          email: response.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "168h" }
      );

      return {
        ...response._doc,
        id: response.id,
        token: token,
      };
    },

    async login(_, { LoginInput }) {
      const { errors, valid } = validateLoginInput(LoginInput);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const { username, password } = LoginInput;

      const response = await User.findOne({ username });

      if (!response) {
        errors.status = "user not found";
        throw new UserInputError("Errors", { errors });
      }

      const decrypt = await bcrypt.compare(password, response.password);

      if (!decrypt) {
        errors.password = "password is wrong";
        throw new UserInputError("Errors", { errors });
      }

      const token = jwt.sign(
        {
          id: response.id,
          username: response.username,
          email: response.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "168h" }
      );

      return { ...response._doc, id: response._id, token: token };
    },
  },
};
