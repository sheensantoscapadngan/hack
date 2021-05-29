const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");

router.post("/:id", async (req, res) => {
  const authId = req.params.id;
  const userId = "test";
  const { language, content, description } = req.body;
  const user = await User.findOne({ authId });

  const newPost = new Post({
    user: userId,
    language,
    content,
    description,
  });
  user.snippets.unshift(newPost);
  await user.save();
  return res.json(user);
});

module.exports = router;
