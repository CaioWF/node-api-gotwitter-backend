const mongoose = require("mongoose");
/*

melhorias:
alterar author de String pra referenciar o author mesmo, com id talvez já que nosql

*/
const TweetSchema = new mongoose.Schema({
  author: String,
  content: String,
  likes: {
    type: Number,
    default: 0
  },
  usernamesLiked: [],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tweet", TweetSchema);
