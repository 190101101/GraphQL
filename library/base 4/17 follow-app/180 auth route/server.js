require("dotenv").config();
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const express = require("express");

const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(logger("dev"));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGO_DB)
  .then((data) =>
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
  )
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.render("home"));
app.get("/works", (req, res) => res.render("works"));

app.use(authRoutes);