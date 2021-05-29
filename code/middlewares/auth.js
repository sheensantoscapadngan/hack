const admin = require("../firebase/admin");

module.exports = async (req, res, next) => {
  const accessToken = req.header("Access-Token");
  console.log("ACCESS TOKEN IS", accessToken);
  admin
    .auth()
    .verifyIdToken(accessToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      if (uid) {
        req.currentUser = uid;
        next();
      }
    })
    .catch((error) => {
      console.error(error);
      return res.status(401).send("Invalid Access Token xD");
    });
};
