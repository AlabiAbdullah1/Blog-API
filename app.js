const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const authRouter = require("./Routes/auth.routes");
const publishedblogRoutes = require("./Routes/publishedblog.routes");
const drafblogRoutes = require("./Routes/drafblog.routes");
const { connectToMongoDB } = require("./db");
require("dotenv").config();
require("./db").connectToMongoDB();
require("./authentication/auth");

const app = express();
app.use(express.json());

app.use("/users", authRouter);
app.use("/blogs/published", publishedblogRoutes);
app.use(
  "/blogs/draft",
  passport.authenticate("jwt", { session: false }),
  drafblogRoutes
);

app.get("/", (req, res) => {
  res.send("Welcome to the blog API");
});

// Handle errors.
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.json({ error: err.message });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
