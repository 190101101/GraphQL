const jwt = require("jsonwebtoken");
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
    const token = jwt.sign({ data: user._id }, "secret", { expiresIn: "1h" });
    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });
    console.log(token);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
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
