const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
   const stream =  fs.createReadStream('./bigdata.txt')
   stream.on('data', (chunk)=>{
    console.log(chunk.length)
   })

   stream.pipe(res)

   
}).listen(3000,()=> console.log('running'))