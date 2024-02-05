require("dotenv").config();
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const workRoutes = require("./routes/workRoutes");
const {authControl, userControl} = require("./middleware/AuthMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());

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

app.get('*', userControl);
app.get("/", authControl, (req, res) => res.render("home"));
app.get("/works", authControl, (req, res) => res.render("works"));

app.use(authRoutes);
app.use(workRoutes);