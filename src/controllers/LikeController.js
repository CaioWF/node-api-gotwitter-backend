const Tweet = require("../models/Tweet");

const store = async (req, res) => {
  const tweet = await Tweet.findById(req.params.id);

  const { username } = req.body;

  if (tweet.usernamesLiked.includes(username)) {
    tweet.set({
      likes: tweet.likes - 1
    });

    tweet.usernamesLiked.splice(tweet.usernamesLiked.indexOf(username), 1);
  } else {
    tweet.set({
      likes: tweet.likes + 1
    });

    tweet.usernamesLiked.push(username);
  }

  tweet.save();

  req.io.emit("like", tweet);

  return res.json(tweet);
};

module.exports = {
  store
};
