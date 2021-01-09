const express = require('express');
const morgan = require("morgan");
const bodyParser =require("body-parser");
const serve = require("express-static");
const mw = require('./middleware.js');
const route = require('./router.js');
const {accessLogStream} = require("./morgan.js");
const {nodemailer} = require('./nodemailer.js')
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(mw.logger);

//morgan 
app.use(morgan('combined', { stream: accessLogStream }))


//body-parser
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({extended:false});


//route
app.use("/route",route);

//post
app.post("/link",(req,res)=>{
	console.log(req.body.name);
	res.send("route request Response")
})

//express.static
//app.use(serve(_dirname + "/public"));

//mailer
app.use(nodemailer)

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
