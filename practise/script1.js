// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("message", (data)=>{
//     console.log(data.text);
// })

// emitter.on("logout", (data)=>{
//     console.log(data.text);
// })

// emitter.emit("message", {text: "user logged"});
// emitter.emit("message", {text: "user went to about section"});
// emitter.emit("message", {text: "user went to contact page"});


// emitter.emit("logout", {text: " user logged out"});

const http = require("http");
const fs = require("fs");
const path = require("path");


const server = http.createServer((req, res) => {
    console.log(req.url);
    // res.write("<h1>f u nigga!!!</h1>");
    // res.write("\n\n\nfound water on moon  MOON 1 - 0 AFRICA");
    // console.log("whats that nigga");
    if(req.url === "/"){
        fs.readFile(path.join(__dirname,"views","index.html"),"utf-8",(err,data)=>{
            if (err) throw err;
            res.writeHead(200, {"Content-Type": "text/html" })
            res.end(data);
        });
    }
    if(req.url === "/contact"){
        fs.readFile(path.join(__dirname,"views","contact.html"),"utf-8",(err,data)=>{
            if (err) throw err;
            res.writeHead(200, {"Content-Type": "text/html" })
            res.end(data);
        });
    }
  
   
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, ()=> console.log(`Nigga is running ${PORT}`));

const logger = require("./utils");

console.log(logger())