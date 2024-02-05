const { Schema, model } = require("mongoose");

const ArticleSchema = new Schema({
  article: String,
  username: String,
  createdAt: String,
  comments: [
    {
      comment: String,
      username: String,
      createdAt: String,
    },
  ],
  likes:[
    {
      username: String,
      createdAt: String,
    },
  ],
  user:{
    type:Schema.Types.ObjectId,
    ref:'users'
  }
});

module.exports = model("article", ArticleSchema);
