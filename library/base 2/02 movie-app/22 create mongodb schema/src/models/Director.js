const mongose = require("mongoose");
const Schema = mongoose.Schema;

const directorSchema = new Schema({
  name: String,
  birthday: Number,
});

module.exports = mongoose.model('Director', directorSchema);