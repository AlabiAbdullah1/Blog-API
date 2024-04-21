const User = require("../model/users");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const passport = require("passport");
require("../authentication/auth");

module.exports.getUsers = function (req, res) {
  const projection = {
    password: 0,
  };

  User.find({}, projection).then((users) => {
    res.status(200).json({
      message: "Success!",
      users,
    });
  });
};

module.exports.login_post = async function (req, res, next) {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err) {
        return next(err);
      }
      if (!user) {
        const error = new Error("Username or password is incorrect");
        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, process.env.JWT_SECRET);

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};
