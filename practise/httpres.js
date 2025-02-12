const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res)=>{
    const name = "vishwas";
    console.log("got request");
    res.writeHead(200,{"Content-Type": "text/html"});
    // let html = fs.createReadStream("./index.html");
    fs.createReadStream("./index.html").pipe(res);

    // html = html.replace("{{name}}", name)
    // res.write(html)
    //    res.end("ended");

    // html.on("data",(chunk)=>{
    //     res.end(chunk);
    // })
    
});

const PORT = process.env.PORT || 3001;

server.listen(PORT,()=> console.log("server is running"));