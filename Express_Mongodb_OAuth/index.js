const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const passport = require("passport-google-oauth20");
const session = require("express-session");
const connectDB = require("./config/db");
const expressEjsLayouts = require("express-ejs-layouts");

// Load config
dotenv.config({ path: "./config/config.env" });

// Google-Passport Strategy
require("./config/passport_google_strategy")(passport);

// Connect DB
connectDB();

const app = express();

//Logging
if (process.env.NODE_ENV === "development") 
  app.use(morgan("dev"));

// ejs
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');
app.set("layout", "./layouts/main");

// Sessions
app.use(session({
  secret: "muhammetcokyaman",
  resave: ture,
  saveUninitialized: false,
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Satic Folder
app.use(express.static(path.join(__dirname, "public"))) 

// Routes
app.use('/', require('./routes/router'));
app.use("/auth", require("./routes/auth"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
