const express = require("express");
const router = express.Router();
const blogControllers = require("../controllers/blogContorllers");


router.get("/blog/:id",blogControllers.blog_single)

router.get("/about",blogControllers.blog_about);

router.get("/login",blogControllers.blog_login);

module.exports = router