module.exports = {
    // eger site kullanicisi isen
    ensureAuth: function (req,res,next) {
        if(req.isAuthenticated()){
            return next();
        }else {
            res.redirect("/")
        }
    },
    // eger site kullanicsi degilsen 
    ensureGuest: function(req,res,next) {
        if(req.isAuthenticated()){
            res.redirect("/dashboard");
        }else {
            return next();
        }
    }
}