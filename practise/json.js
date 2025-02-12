const http = require("node:http");

const server = http.createServer((req, res)=>{
    const sup ={
        firstname:"bruce",
        lastname:"wayne",
    }
    res.writeHead(200, {"Content-Type":"application/json"});

    res.end(JSON.stringify(sup));
});

server.listen(3000);