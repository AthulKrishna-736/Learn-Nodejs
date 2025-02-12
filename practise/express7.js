const express = require('express')
const session = require('express-session')
const app = express()

const port = 3000

app.use(session({
    secret:"secret key",
    resave:true,
    saveUninitialized:true
}))

app.get('/',(req, res)=>{
    req.session.name="john"
    return res.send("session set")
})

app.get('/session',(req, res)=>{
    const name = req.session.name
    return res.send(name)
})

app.get('/destroy',(req, res)=>{
    req.session.destroy((err)=>{
        console.log("session destroyed")
    })
})

app.listen(port)

