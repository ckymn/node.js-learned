const Blog = require("../models/blogs");


const blog_single =  async (req,res) =>{
    const { params} = req; 
    let id = params.id;
  
    try {
      let result = await Blog.findById(id);
      res.render("blog",{title:"Detay", blogs:result});
    } catch (error) {
      res.status(404).render("404",{title: "Fault Page"})
    }
  }

const blog_about = (req, res) => {
    res.render("about", { title: "About Page" });
  }

module.exports = {
    blog_single,
    blog_about,
}