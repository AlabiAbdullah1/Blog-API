const { Router } = require("express");
const authController = require("../Controllers/authController");
const passport = require("passport");
const { UserAddSchema } = require("../validator/auth.validator");
const validator = require("../validator/validator");
require("dotenv").config();

const authRouter = Router();

authRouter.get("/", authController.getUsers);

authRouter.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res, next) => {
    res.json({
      message: "Signup successful",
      user: req.user,
    });
  }
);

// authRouter.post(
//   "/signup",
//   // validator.validateSchema(UserAddSchema),
//   authController.signup_post
// );
authRouter.post("/login", authController.login_post);

module.exports = authRouter;
