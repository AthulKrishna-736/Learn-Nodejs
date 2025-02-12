const fs = require("node:fs");

const readstream = fs.createReadStream("./file.txt",{
    encoding: "utf-8",
});

const writestream = fs.createWriteStream("./file2.txt");

readstream.on("data",(chunk)=>{
    console.log(chunk);
    writestream.write(chunk);
})