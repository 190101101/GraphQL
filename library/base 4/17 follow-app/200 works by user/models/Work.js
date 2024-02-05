const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
  },
  start: {
    type: Date,
    required: [true, "start is required"],
  },
  finish: {
    type: Date,
    required: [true, "finish is required"],
  },
  userId:{
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Work", WorkSchema);
