const jwt = require("jsonwebtoken");
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

module.exports = { requireAuth };
