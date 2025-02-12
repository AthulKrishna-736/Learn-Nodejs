// const express = require("express");

// const app = express();
// app.get("/",(req , res)=>{
//     res.json("<h1>Home<h1>");
// })
// app.get("/contact",(req, res)=>{
//     res.json("contact");
// })

// app.get("*", (req, res)=>{
//     res.status(404)
//     res.send(404)
// })
// const PORT = process.env.PORT || 3001;

// app.listen(PORT, ()=> console.log(`server runing on ${PORT}`));

// const express = require("express");
// const app = express();

// app.get("/profile" ,Token, (req,res,next)=>{
//     console.log("user logged");
//     res.send("<h1>Success</h1>");
//     next()
// },(req,res)=>{
//     console.log("last middile ware");
// });

// function Token(req , res, next){
//     console.log("creating middile ware");
//     next()
// }

// const PORT = process.env.PORT || 3001;

// app.listen(PORT);

const express = require("express");
const app = express();
const token = require("./middleware/token");
const validation = require("./middleware/validation");

app.use(Dategenerator);

const middleware = [token, validation]; 

app.get("/profile", middleware , (req, res) => {
    console.log("user logged");
    res.send("<h1>Success</h1>");
})

app.get("/",(req, res, next)=>{
    console.log("normal url");
    res.send("<h1>Home</h1>");
    next();
})


function Dategenerator(req , res, next){
   console.log(new Date());
   next();
}

const PORT = process.env.PORT || 3001;

app.listen(PORT);

