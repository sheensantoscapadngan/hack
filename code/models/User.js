const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  displayName: {
    required: true,
    type: String,
  },
  authId: {
    required: true,
    type: String,
  },
  picture: {
    type: String,
  },
  snippets: [],
});

module.exports = new mongoose.model("User", UserSchema);
