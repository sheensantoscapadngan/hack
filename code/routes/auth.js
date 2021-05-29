const User = require("../models/User");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, displayName, authId, picture } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.json(user);
  }
  const newUser = new User({
    email,
    displayName,
    authId,
    picture,
  });
  await newUser.save();
  res.json(newUser);
});

module.exports = router;
