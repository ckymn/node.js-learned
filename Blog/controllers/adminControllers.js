const Blog = require("../models/blogs");

const home = async (req, res) => {
    try {
        let result = await Blog.find().sort({createdAt : -1});
        res.render("index", { title: "Home Page" , blogs : result});
    } catch (error) {
        res.status(404).render("404",{title: "Fault Page"})
    }
}

const admin_index =  async (req, res) => {
    try {
        let result = await Blog.find().sort({createdAt : -1});
        res.render("admin", { title: "Admin Page" , blogs : result});
    } catch (error) {
        res.status(404).render("404",{title: "Fault Page"})
    }
  }

const admin_add_get =  async (req, res) => {
    res.render("add",{title: "Add Post"})
}

const admin_add_post =  async (req,res) =>{
    const {params , body} = req;
    let newPost = new Blog(body);
    await newPost.save();
    res.redirect("/admin");
  }

const admin_delete =  async (req,res) => {
    const {params} = req;
    try {
      await Blog.findByIdAndDelete(params.id); 
      res.json({link : "/admin"})
    } catch (error) {
      console.error(error);
    }
  }

module.exports = {
    home,
    admin_index,
    admin_add_get,
    admin_add_post,
    admin_delete,
}