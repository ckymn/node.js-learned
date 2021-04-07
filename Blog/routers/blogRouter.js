const express = require("express");
const router = express.Router();
const blogControllers = require("../controllers/blogContorllers");


router.get("/:id",blogControllers.blog_single)

router.get("/about",blogControllers.blog_about);

module.exports = router