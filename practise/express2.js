const express = require('express')
const app = express()

app.get('/ping',(req, res)=>{
    res.send('Node express application')
})

app.listen(3000, ()=>{
    console.log('server is running');
})