var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	let id = req.query.id;
  res.send('Gondermis oldugunuz parametre :'+id);
  // res.render('index', {title: 'Kullanici Listesi'});
  // res.redirect("http://github.com/ckymn");
});

router.post("/create", (req,res,next) =>{
	res.send("Kayit icin kullanilcak route alani ....")
})

module.exports = router;
