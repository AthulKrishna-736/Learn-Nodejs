function validation(req, res, next){
    if(req.token){
        console.log("Token approved");
        next();
       }
       else{
        console.log("Token not created");
        res.send("<h1>User cant authenticate</h1>");
       }
}

module.exports = validation;