const express = require("express");
const passport = require("passport");
const router = express.Router();

// auth/google
// Yetkilendirme
router.get(`/google`, passport.authenticate("google", { scope: ["profile"] }));

// auth/google/callback
// Yonlendirme
router.get(
  `/google/callback`,
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

// auth/logout
router.get(`/logout`, (req, res) => {
  req.logout();
  res.redirect("/");
});


module.exports = router;
