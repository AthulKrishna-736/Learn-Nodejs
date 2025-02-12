const express = require('express')

const app = express()

const port = 3000;

const data ={
    id:1,
    name:'myname'
}

app.get('/',(req, res)=>{
    res.send('welcome to home page')
})

app.get('/about',(req, res)=>{
    res.send('welcome to about page')
})

app.get('/weather',(req, res)=>{
    res.json(data)
})

app.listen(port)
