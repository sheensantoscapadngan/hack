const express = require("express");
const router = express.Router();

router.get("/", () => console.log("WELCOME TO PROFILE TEST"));

module.exports = router;
