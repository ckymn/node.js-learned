const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//token
const maxAge = 60 * 60 ;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.jwtkeys, { expiresIn: maxAge });
};

const login_get = (req, res) => {
  res.render("login", { title: "Login" });
};

const login_post = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      // token : isteklerin ayni kisiden gidip gitmedigini dogrular.
      const token = createToken(user._id);
      //cookies : sitede dolasmak icin
      res.cookie("tokens", token, {
        httpOnly: true,
        maxAge: maxAge * 1000, // ms cinsinden calisir
      });
      res.redirect("/admin");
    } else {
      throw Error("parola hatali");
    }
  } else {
    throw Error("username hatali");
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

// cookie kaldirma islemi
const logout_get = (req, res) => {
  res.clearCookie("tokens")
  res.redirect("/login");
};

module.exports = {
  login_get,
  login_post,
  signup_get,
  signup_post,
  logout_get,
};
