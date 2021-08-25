const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.get("/all", articlesController.findArticles);

module.exports = router