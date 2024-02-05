const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SnapSchema = new Schema({
  user_id: {
    type: Schema.Object.id,
  },
  text: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", SnapSchema);
