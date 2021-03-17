const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const expressEjsLayouts = require("express-ejs-layouts");

// Load config
dotenv.config({ path: "./config/config.env" });

// Connect DB
connectDB();

const app = express();

//Logging
if (process.env.NODE_ENV === "development") 
  app.use(morgan("dev"));

// Handlebars
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');
app.set("layout", "./layouts/main");

// Satic Folder
app.use(express.static(path.join(__dirname, "public"))) 

// Routes
app.use('/', require('./router'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
