import http from 'http';

const port = 3000

const server = http.createServer((req, res, next) => {
    res.setHeader('Content-Type', 'text/html')

    if (req.method == 'GET' && req.url == '/user') {
        res.writeHead(201, "OK");
        res.end(`<h1>Get methods server sended data</h1> 
            <br> 
            <p>this is a sample response to user</p>`);
    }

    else if (req.method == 'GET' && req.url == '/about') {
        res.writeHead(200, "Success")
        res.end(`
            <h1>This is the about page try to get</h1>
            <br>
            <p>This also sample paragraph for the requeste user</p>
            `)
    }

    else if (req.method == 'POST' && req.url == '/user') {
        res.writeHead(201, "Created")
        res.end(`<h1>User have been created</h1>`)
    } else {
        res.writeHead(404, "Page Not Found");
        res.end(`<h1>404 - page not found</h1>`)
    }
});


server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})


console.log('process id: ', process.pid)
console.log('curr dir: ', process.cwd())
process.nextTick(() => {
    console.log('Executed before next event loop cycle')
})
console.log('end of script')


