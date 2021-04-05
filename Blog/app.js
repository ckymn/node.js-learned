const express = require("express");
const morgan = require("morgan");
const path = require("path"); 
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const Blog = require("./models/blogs");

const app = express();

//configure
dotenv.config({ path: "./config/.env" });

//db
connectDB();

// tamplate
app.set("view engine", "ejs");

//static
app.use(express.static(path.join(__dirname, "public")));

// middleware -3th
app.use(morgan("dev"));

app.get("/", async (req, res) => {
    try {
        let result = await Blog.find().sort({createdAt : -1});
        res.render("index", { title: "Home Page" , blogs : result});
    } catch (error) {
        console.error(error);
    }
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/login", (req, res) => {
  res.render("login", { title: "Login Page" });
});
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// middleware
app.use((req, res) => {
  res.status(404).render("404", { title: "Fault Page" });
});

// run
app.listen(process.env.PORT, () => {
  console.log(`on ${process.env.PORT} port running ...`);
});
