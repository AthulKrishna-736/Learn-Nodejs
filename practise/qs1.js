const http = require('node:http');
const port = process.env.PORT || 3001;
const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("this is a sample response");
    res.end();
})
console.log(process.argv)
server.listen(port, ()=>{
    console.log("Server is running on http://localhost:3001");
});