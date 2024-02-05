const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail, validator } = require("validator");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email is unique"],
    lowercase: true,
    validate: [isEmail, "wrong email"],
  },
  password: {
    type: String,
    required: [true, "password is unique"],
    lowercase: true,
    minlength: [3, "minimum password length must be 3 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function(next) {
  const salt = await bcrypt.genSaltSync();
  this.password = await bcrypt.hashSync(this.password, salt);
  next();
});


module.exports = mongoose.model("User", UserSchema);
