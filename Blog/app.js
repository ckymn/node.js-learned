const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

// tamplate
app.set("view engine" , "ejs");

//static
app.use(express.static(path.join(__dirname, "public")));

// middleware -3th
app.use(morgan("dev"));


app.get("/" , (req,res) => {
    res.render("index", {title : "Home Page"});
})

app.get("/about" , (req,res) => {
    res.render("about", {title : "About Page"});
})

app.get("/login" , (req,res) => {
    res.render("login", {title : "Login Page"})
})
app.get("/about-us" , (req,res) => {
    res.redirect("/about");
})


// middleware
app.use((req,res) => {
    res.status(404).render("404",{title : "Fault Page"});
})



app.listen(3000, () => {
    console.log("port running ...")
})