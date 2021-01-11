const mongo = require("mongodb").MongoClient;


mongo.connect("mongodb://127.0.0.1:27017/monogTest", function(error,db){
	if (error) {
		throw error;
		console.log("Baglanti saglanamadi..")
	}
	else{
		console.log("Baglanti saglandi..")

		db.collection
	}
})