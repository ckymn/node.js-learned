const express = require("express");
const { getKonut , getKonutlar } = require("./scraper");
const app = express();


app.get("/konutlar", (req, res) => {
  const { query , body } = req;
  getKonutlar()
    .then((response) => {
      console.log(response);
    res.json(response);
  });
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listening on ${port} or 5000");
});

