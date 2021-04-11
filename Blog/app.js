const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path"); 
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const admin = require("./routers/adminRouter")
const blog = require("./routers/blogRouter")
const authRoute = require("./routers/authRouter")
const {requireAuth,checkUser} = require("./middleware/authMiddleware");
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
app.use(cors())
app.use(cookieParser());
//body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}))
//all page run
app.get("*",checkUser);
// router
app.use("/",authRoute);
app.use(requireAuth,admin);
app.use(blog);
// middleware
app.use((req, res) => {
  res.status(404).render("404", { title: "Fault Page" });
});
// run
app.listen(process.env.PORT, () => {
  console.log(`on ${process.env.PORT} port running ...`);
});
