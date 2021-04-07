const User = require("../models/users");
const jwt = require("jsonwebtoken");

//token 
const maxAge = 60*60*24;
const createToken = (id) => {
    return jwt.sign({id} , "muhammet blog", {expiresIn: maxAge})
}

const login_get = (req, res) => {
  res.render("login", { title: "Login" });
};

const login_post = async (req, res) => {
  const { username, password} = req.body;
//   let addedUser = await User.findOne(username);
  
   /* if(addedUser){
    let findUser = bcrypt.compare(password, addedUser.password) 
    if(findUser)
        res.redirect("/");
    throw Error("Parola Hatali...")
    }
    res.redirect("/signout"); */

    try {
        const user = await User.login(username, password);
        // token : dogrulanmis kullanici oldugu bilinsin diye
        const token = createToken(user._id);
        //cookies : sitede dolasmak icin
        res.cookie("jwt",token,{
            httpOnly: true,
            maxAge : maxAge*1000 // ms cinsinden calisir 
        })
        res.redirect("/admin");
    } catch (error) {
        console.error(error);
    }

    
};
const signup_get = (req, res) => {
  res.render("signup", { title: "Signup" });
};
const signup_post = async (req, res) => {
  const { body, params } = req;
  let newUser = new User(body);
  await newUser.save();
  res.redirect("/login");
};
const logout_get = (req, res) => {
  res.cookie("jwt","",{maxAge:1});
  res.redirect("/login")
};

module.exports = {
  login_get,
  login_post,
  signup_get,
  signup_post,
  logout_get,
};
