const fs = require('fs')



const read = fs.createReadStream('./bigdata.txt')

read.on('data',(chunks)=>{
    console.log(chunks.length);
})
read.on('error',(err)=> console.log(err))
