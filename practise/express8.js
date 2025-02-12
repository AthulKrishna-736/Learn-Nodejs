const express = require('express')
const app = express()
const cookies = require('cookie-parser')

const port = 3000
app.use(cookies())

let users = {
    name:'john',
    age:30
}
app.get('/',(req, res)=>{
    res.send('cookies making')
})

app.get('/setuser',(req, res)=>{
    res.cookie('userdata',users)
    res.send('user data added')
})

app.get('/getuser',(req, res)=>{
    res.send(req.cookies)
})

app.get('/logout',(req, res)=>{
    res.clearCookie('userdata')
    res.send('user logged out')
})
app.listen(port)