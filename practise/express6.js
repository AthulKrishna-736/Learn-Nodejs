const express = require('express')
const path = require('path')

const app = express()

const port = 3000


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views2'))

app.use(express.urlencoded(
   { extended:true }
))

app.get('/',(req, res)=>{
    res.render('html1')
})

app.post('/form',(req, res)=>{
    const user = req.body.username
    const email = req.body.email
    res.end(`user name is ${user}, email is ${email}`)
})

app.listen(port)