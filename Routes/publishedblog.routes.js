const { Router } = require("express");
const publishedblogController = require("../Controllers/publishedblogController");

const publishedblogRoutes = Router();

// publishedblogRoutes.get("/", publishedblogController.searchable);
publishedblogRoutes.get("/:id", publishedblogController.getAPublishedblog);
publishedblogRoutes.get("/", publishedblogController.getPublishedblogs);

module.exports = publishedblogRoutes;
