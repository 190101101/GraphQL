const User = require("../models/User");

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
  } catch (e) {
    res.status(400).json({ message: "something is wrong" });
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
