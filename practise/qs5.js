const http = require("http")
const fs = require('fs')
const path = require('path')
const port = process.env.port || 3001;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'})

    res.write('This server is for niggas\n')
 
    fs.readFile('./file2.txt','utf-8',(err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        res.write(`normal data: ${data}\n`)

    fs.appendFile('./file3.txt', data,'utf-8',(err)=>{
            if(err){
                res.write(err +'error in appending')
                res.end();
                return;
            }
        })
    }
   })
   const readfile = fs.readFileSync('./file3.txt','utf-8')
   res.write(readfile);
   res.write('\n\nresponse has ended')
   fs.readFile(path.join("C:/testfs/sample.txt"),'utf-8',(err, data1)=>{
    if(err){
        console.log('error while reading');
    }
    else{
        console.log('file readed')
        res.write(data1);
    }
   
    res.end();
})    
    })
    // fs.unlink('./filedlt.txt',(err)=>{
    //     if(err){
    //         console.log("error in deleting the file");
    //     }
    //     else{
    //         console.log('the file has been succeessfully deleted');
    //     }
    // })
    // try{
    //     fs.unlinkSync('./filedlt.txt');
    // }
    // catch(err){
    //     console.log('error no such files')
    // }
   
  

server.listen(port,()=>{
    console.log('server is running https://localhost:3001');
})