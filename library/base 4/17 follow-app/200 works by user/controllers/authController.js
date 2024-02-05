require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const catchErrors = (error) => {
  let errors = { email: "", password: "" };

  if (error.code === 11000) {
    errors.email = "email is already have in db";
    return errors;
  }

  if (error.message.includes("User validation failed")) {
    Object.values(error.errors).forEach((properties) => {
      errors[properties.path] = properties.message;
    });
  }

  if (error.message == "email-error") {
    errors.email = "email is wrong";
  }

  if (error.message == "password-error") {
    errors.password = "password is wrong";
  }

  return errors;
};

const signup_get = (req, res) => {
  res.render("signup");
};

const login_get = (req, res) => {
  res.render("login");
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = jwt.sign({ data: user._id }, process.env.JWT, { expiresIn: "1h" });
    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });
    res.status(200).json(user);
  } catch (error) {
    const errors = catchErrors(error);
    res.status(400).json({ errors });
  }
};

const login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = jwt.sign({ data: user._id }, process.env.JWT, { expiresIn: "1h" });
    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });
    res.status(400).json({ _id: user._id });
  } catch (error) {
    const errors = catchErrors(error);
    res.status(400).json({ errors });
  }
};

const logout = (req, res) => {
  res.cookie('jwt', 'logout', {maxAge:1});
  res.redirect('/login');
}

module.exports = {
  signup_get,
  login_get,
  signup_post,
  login_post,
  logout,
};
