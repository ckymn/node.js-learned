const express = require("express");
const Blog = require("../models/blogs");
const router = express.Router();


router.get("/", async (req, res) => {
    try {
        let result = await Blog.find().sort({createdAt : -1});
        res.render("index", { title: "Home Page" , blogs : result});
    } catch (error) {
        res.status(404).render("404",{title: "Fault Page"})
    }
});

router.get("/admin", async (req, res) => {
  try {
      let result = await Blog.find().sort({createdAt : -1});
      res.render("admin", { title: "Admin Page" , blogs : result});
  } catch (error) {
      res.status(404).render("404",{title: "Fault Page"})
  }
});

router.get("/admin/add", async (req, res) => {
    res.render("add",{title: "Add Post"})
});

router.post("/admin/add", async (req,res) =>{
  const {params , body} = req;
  let newPost = new Blog(body);
  await newPost.save();
  res.redirect("/admin");
})

router.delete("/admin/delete/:id", async (req,res) => {
  const {params} = req;
  try {
    await Blog.findByIdAndDelete(params.id);
    res.json({link : "/admin"})
  } catch (error) {
    console.error(error);
  }
})

router.get("/blog/:id", async (req,res) =>{
  const { params} = req; 
  let id = params.id;

  try {
    let result = await Blog.findById(id);
    res.render("blog",{title:"Detay", blogs:result});
  } catch (error) {
    res.status(404).render("404",{title: "Fault Page"})
  }
})

router.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Login Page" });
});

router.get("/about-us", (req, res) => {
  res.redirect("/about");
});

module.exports = router