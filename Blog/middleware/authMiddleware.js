const jwt = require("jsonwebtoken");
const requireAuth = (req,res,next) =>{
    const token = req.cookies.jwt;

    if(token){
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

module.exports = { requireAuth};