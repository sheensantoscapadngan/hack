const admin = require("firebase-admin");
const config = require("config");
const serviceAccountPath = config.get("serviceAccountPath");
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
