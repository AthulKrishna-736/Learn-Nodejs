const express = require('express')
const app = express()

app.use(express.static('views2'))
app.get('/', (req, res)=>{
    res.send("static files")
})

app.listen(3000)