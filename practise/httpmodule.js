const http = require("node:http");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end("hello nigga");
})


server.listen(3000);