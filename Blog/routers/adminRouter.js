const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers");


router.get("/", adminControllers.home);

router.get("/admin",adminControllers.admin_index);

router.get("/admin/add",adminControllers.admin_add_get);

router.post("/admin/add",adminControllers.admin_add_post)

router.delete("/admin/delete/:id",adminControllers.admin_delete)

module.exports = router;