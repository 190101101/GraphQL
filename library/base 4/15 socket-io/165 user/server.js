const path = require("path");
const socket = require("socket.io");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/room", (req, res) => {
  res.sendFile(`${__dirname}/public/room.html`);
});

app.get("/user", (req, res) => {
  res.sendFile(`${__dirname}/public/user.html`);
});

const server = app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});

const io = socket(server);

io.on("connection", (socket) => {
  console.log(`socket connected ${socket.id}`);
  socket.emit("user", socket.id);
});
