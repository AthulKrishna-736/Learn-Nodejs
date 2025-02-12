const http = require('http')
const fs = require('fs')

const port = process.env.port || 3001

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'})
    const getfile = ((path)=>{
        return new Promise((resolve, reject)=>{
            fs.readFile(path, 'utf-8', (err, data)=>{
                if(err){
                    reject('error while reading file')
                }
                else{
                    resolve(data)
                    console.log('data is read successfully')
                }
            })
        })
        
    })

//     getfile('./testfile.txt')
//     .then((response)=>{
//         res.write(response)
//         res.end()
//     })
//     .catch((error)=>{
//         res.write('error while reading file')
//         res.end()
//     })
const a = async()=>{
            try{
            const first = await getfile('./testfile.txt')
            res.write(first)
            res.write("\n")
            const sec = await getfile('./testfile1.txt')
            res.write(sec)
            res.end();    
        }
            catch(err){
                console.log('error is reading file')
            }
        }
        a()
})


server.listen(port,()=> console.log('server is running'))