const jwt = require("jsonwebtoken");
const requireAuth = (req,res,next) =>{
    // bu cookies'ta tokens kontrolunu cookie-parser yapiyor.
    const token = req.cookies.tokens;

    if(token){
        // token cozumleme
        jwt.verify(token, "muhammet blog",(err,decodedToken) =>{
            if(err){
                console.error(err);
                res.redirect("/login");
            }else {
                console.log(decodedToken);
                next();
            }
        });
    }else {
        res.redirect("/login");
    }
}

module.exports = { requireAuth };