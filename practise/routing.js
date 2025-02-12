const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res)=>{

    if(req.url === "/"){
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("home page");
    }
    else if(req.url === "/about"){
        res.end("about page");
    }
    else if(req.url === "/api"){
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify({
            firstn:"abcd",
            lastn:"efg",
        }))
    }
    else{
        res.writeHead(404);
        res.end("page not found")
    }
})

server.listen(3001);