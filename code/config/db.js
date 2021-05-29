const mongoose = require("mongoose");
const config = require("config");
const mongoURL = config.get("mongoURL");

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("CONNECTED TO MONGODB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = {
  connectToDB,
};
