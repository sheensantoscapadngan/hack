const express = require("express");
const { connectToDB } = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

connectToDB();

app.get("/", () => console.log("TEST"));

app.listen(PORT, () => `Listening on port ${PORT}`);
