// NODE.JS ILE BERABER DOSYA OLUSTURMA SILME YAZMA ISLEMLERI GERCEKLESTIRICEZ
const fs = require("fs");	

// reading files
fs.readFile("./docs/blog1.txt" ,(err,data) =>{
	if(err) {
		console.log("error :", err);
	}
	else{
		console.log("file :", data.toString());
	}
});

// writing files 
fs.writeFile("./docs/blog2.txt","BEN GELDIM", () =>{
	if (true) {
		console.log("file was wiritten...");
	}
})

//create directories 
if(!fs.existsSync("./assets")){
	fs.mkdir("./assets", (err) =>{
		if(err){
			console.log(err);
		}
		console.log("new directory successfully created...");
	});	
} else{
	fs.rmdir("./assets",(err) =>{
		if(err){
			console.log(err);
		}
		console.log("folder deleted..");
	})
}

// deleting files
if (fs.existsSync("./docs/delete.js.txt")){
	fs.unlink("./docs/delete.txt.txt", (err) =>{
		if (err) {
			console.error(err);
			return
		}
		console.log("file was removed...")
	})
}
else{
	console.log("zaten dosya silinmis....");
}