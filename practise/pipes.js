const fs = require("node:fs");
const zlib = require("node:zlib");
const readstream = fs.createReadStream("./file.txt",{
    encoding: "utf-8",
});
const gzip = zlib.createGzip()
readstream.pipe(gzip).pipe(fs.writestream("./file.txt"))
const writestream = fs.createWriteStream("./file2.txt");


readstream.pipe(writestream);

