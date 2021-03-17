const express = require("express");
const router = express.Router();

//login
router.get(`/`, (req,res) =>{
    res.render("login", {
        title : "LOGIN"
    });
});

//dashbord
router.get(`/dashboard`, (req,res) =>{
    res.render("dashboard", {
        title : "DASHBOARD",
        layout : "./layouts/globalLogin"
    });
});

module.exports = router;
