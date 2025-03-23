import express from 'express'

const app = new express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello Express!');
})

app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`)
})



const route = express.Router()

route.route('/user')
.all()
.get()
.post()
.put()
.patch()