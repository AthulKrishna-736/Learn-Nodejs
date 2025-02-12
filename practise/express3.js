const  express = require('express')
const app = express()

const mylog = function(req, res, next){
    console.log('logged')
    next();
}

const requtime = function(req, res, next){
    req.reqTime = Date.now()
    next();
}

app.use(mylog)
app.use(requtime)

app.get('/',(req, res)=>{
    res.send(`time is : ${req.reqTime}`)
})

app.listen(3000)