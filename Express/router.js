// Yonlendirilme sayfasi...
const express = require("express");
const route   = express.Router();

route.get("/",(req,res) =>{
	res.send("Homepage");
});

route.get("/login",(req,res)=>{
	res.send("Login Page");
});

route.get("/register",(req,res) =>{
	res.send("Register Page");
});

module.exports = route;