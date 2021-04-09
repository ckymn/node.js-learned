const jwt = require("jsonwebtoken");
const User = require("../models/users");


const requireAuth = (req, res, next) => {
  // bu cookies'ta tokens kontrolunu cookie-parser yapiyor.
  const token = req.cookies.tokens;

  if (token) {
    // token cozumleme
    jwt.verify(token, process.env.jwtkeys, (err, decodedToken) => {
      if (err) {
        console.error("token verify hatasi :", err);
        res.redirect("/login");
      } else {
        console.log("token decoded : ", decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.tokens;

  if (token) {
    // token cozumleme
    jwt.verify(token, process.env.jwtkeys, async (err, decodedToken) => {
      if (err) {
        console.error("token verify hatasi :", err);
        res.locals.userValied = null;
      } else {
        console.log("token decoded : ", decodedToken);
        let user  = await User.findById(decodedToken.id);
        res.locals.userValied = user;
        next();
      }
    });
  } else {
    res.locals.userValied = null;
    next();
  }
};

module.exports = { requireAuth , checkUser};
