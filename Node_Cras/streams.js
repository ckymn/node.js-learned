const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt");
const writeStream = fs.createWriteStream("./docs/blog2.txt");

// readStream.on("data", (chunk) =>{
// 	console.log("----new chunk----");
// 	console.log(chunk.toString());

// 	writeStream.write("\n New Chunk \n");
// 	writeStream.write(chunk);
// })


//piping --> yukardaki tum islemlerin kisa hali
readStream.pipe(writeStream);