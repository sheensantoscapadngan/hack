const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const auth = require("../middlewares/auth");

router.post("/:id", auth, async (req, res) => {
  const authId = req.params.id;
  const userId = req.currentUser;
  const { language, content, description } = req.body;
  if (userId !== authId) {
    return res
      .status(400)
      .send("You cannot post on other people's profile lol");
  }
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

router.get("/:id", async (req, res) => {
  const authId = req.params.id;
  const user = await User.findOne({ authId });
  if (!user) {
    return res.status(404).send("USER DOES NOT EXIST");
  }
  return res.json(user);
});

module.exports = router;
