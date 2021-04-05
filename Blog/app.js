const express = require("express");
const morgan = require("morgan");
const path = require("path"); 
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const router = require("./routers/index")

const app = express();

//configure
dotenv.config({ path: "./config/.env" });
//db
connectDB();
// tamplate
app.set("view engine", "ejs");
//static
app.use(express.static(path.join(__dirname, "public")));
// middleware -3th
app.use(morgan("dev"));
//body-parser
app.use(express.urlencoded({extended: true}))
// router
app.use(router);
// middleware
app.use((req, res) => {
  res.status(404).render("404", { title: "Fault Page" });
});
// run
app.listen(process.env.PORT, () => {
  console.log(`on ${process.env.PORT} port running ...`);
});
