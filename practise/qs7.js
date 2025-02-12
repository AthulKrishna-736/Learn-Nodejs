// const fs = require('fs')
// const http = require('http')
// const port = process.env.PORT || 3001
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type':'text/plain'})
//     console.log('start')
//     const readtext = (path)=>{
//         return new Promise((resolve, reject)=>{
//             fs.readFile(path, 'utf-8',(err,data)=>{
//                 if(err){
//                     reject('error cant read file'); 
//                 }
//                 else{
//                     resolve(data)
//                 }
//             })
//         })
    
//     }
//     // readtext('./testfile.txt')
//     // .then((response)=>{
//     //     res.write(response);
//     //     res.end()
//     // })
//     // .catch((err)=>{
//     //     res.write(err);
//     //     res.end()
//     // })
//     const a = async()=>{
//         try{
//         const first = await readtext('./testfile.txt')
//         res.write(first)
//         res.write("\n")
//         const sec = await readtext('./testfile1.txt')
//         res.write(sec)
//         res.end();    
//     }
//         catch(err){
//             console.log('error is reading file')
//         }
//     }

//     a()
// })

// server.listen(port,()=> console.log("https://localhost:3001"))