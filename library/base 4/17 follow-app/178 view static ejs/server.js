require("dotenv").config();
const path = require('path');
const logger = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// app.use(logger("dev"));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, 'public')));

mongoose
  .connect(process.env.MONGO_DB)
  .then((data) =>
    app.listen(process.env.PORT, () => {
      console.log(`http://localhost:${process.env.PORT}`);
    })
  )
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.render("home"));
app.get("/works", (req, res) => res.render("works"));
