const { Router } = require("express");
const drafblogController = require("../Controllers/drafblogController");
const validator = require("../validator/validator");
const { BlogAddSchema } = require("../validator/blog.validator");

const drafblogRoutes = Router();

drafblogRoutes.get("/", drafblogController.getdraftblogs);
drafblogRoutes.get("/:id", drafblogController.getadraftblog);
drafblogRoutes.post(
  "/",
  validator.validateSchema(BlogAddSchema),
  drafblogController.createBlog
);
drafblogRoutes.patch("/", drafblogController.updateState);

module.exports = drafblogRoutes;
