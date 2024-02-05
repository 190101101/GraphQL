require("dotenv").config();
const logger = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(logger("dev"));

app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose
  .connect(process.env.MONGO_DB)
  .then((data) =>
    app.listen(3000, () => {
      console.log(`http://localhost:3000`);
    })
  )
  .catch((err) => console.log(err));

// pages
app.get("/", (req, res) => res.render('home'));
app.get("/works", (req, res) => res.render('works'));
