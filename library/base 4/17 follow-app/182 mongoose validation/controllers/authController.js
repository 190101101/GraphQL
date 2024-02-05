const User = require("../models/User");

const catchError = (error) => {
  console.log(error.message)
  console.log(error.code)
}

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
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    catchError(error);
    res.status(400).json(error.errors);
  }
};

const login_post = async (req, res) => {
  const { email, password } = req.body;
  res.send("logined");
};

module.exports = {
  signup_get,
  login_get,
  signup_post,
  login_post,
};
