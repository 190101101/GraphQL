require("dotenv").config();
const Work = require("../models/Work");

const works_get = async (req, res) => {
  console.log(res.locals);
  Work.find({ 'userId': res.locals.user._id }).then((data) => {
    console.log(data);
    res.render("works", { works: data });
  });
};

const work_add_get = (req, res) => {
  res.render("add");
};

const work_add_post = async (req, res) => {
  const { title, description, start, finish } = req.body;

  try {
    const work = await Work.create({
      title,
      description,
      start: new Date(start),
      finish: new Date(finish),
      userId: res.locals.user._id,
    });

    console.log(work);

    res.status(200).json({ work: work._id });
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

module.exports = {
  work_add_get,
  work_add_post,
  works_get,
};
