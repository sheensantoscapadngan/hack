const express = require("express");
const { connectToDB } = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

connectToDB();

app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/profile", require("./routes/profile"));

app.listen(PORT, () => `Listening on port ${PORT}`);
