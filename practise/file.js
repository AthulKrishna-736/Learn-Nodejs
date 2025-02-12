const fs = require("node:fs");
console.log('first');
const file1 = fs.readFileSync("./file.txt","utf-8");
console.log(file1) 
console.log('seccond');
fs.readFile("./file.txt","utf-8", (error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})
console.log('third');

fs.writeFileSync("./file.txt","hey nigga get the f out");
fs.writeFile("./file.txt","hello vishwas", {flag: "a"},(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file has written");
    }
});  