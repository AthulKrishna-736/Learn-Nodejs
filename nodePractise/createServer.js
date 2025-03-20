import http from 'http';

const port = 3000

const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.write('hello')
    res.write('world')
    res.write('this is sample res')
    res.end('response ended')
});


server.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})