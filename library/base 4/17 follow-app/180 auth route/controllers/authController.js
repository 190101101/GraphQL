const signup_get = (req, res) => {
  res.render("signup");
};

const login_get = (req, res) => {
  res.render("login");
};

const signup_post = async (req, res) => {
  const { email, password, confirm } = req.body;
  
  console.log(req.body);
  // console.log(email, password, confirm);
  res.send("new user create");
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
