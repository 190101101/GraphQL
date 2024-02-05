require("dotenv").config();

const work_add_get = (req, res) => {
  res.render("add");
};

module.exports = {
  work_add_get,
};
