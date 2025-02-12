const http = require('http')
const EventEmitter = require('events')

const customevent = new EventEmitter()

const server = http.createServer()

server.on('request',(req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('sample data listening')
    console.log('some other type listening')
    res.end()
})



server.listen(3001)