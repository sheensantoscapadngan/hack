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
  uid: {
    required: true,
    type: String,
  },
  picture: {
    type: String,
  },
  snippets: [],
});

export default new mongoose.model("User", UserSchema);
