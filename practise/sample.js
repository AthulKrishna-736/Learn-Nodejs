// const arr = ["a","b","b"];

// const newArray = [...arr, "d"];

// console.log(newArray);

// function newfn(){
//     console.log("run nigga run");

//     return 10;
// }

// console.log(newfn());

// const new1 = () => 10;
// console.log(new1())

// let inter =  setInterval(function(){
   
//     console.log("running");
// },2000)



// setTimeout(()=> clearInterval(inter),6000);

globalThis.console.log("tesst")
console.log(global)

console.log(__filename);
console.log(__dirname);

const path = require("path")
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.parse(__filename).ext);
const fs = require("fs")
// console.log(fs)

fs.writeFile(path.join(__dirname, "/api", "api.txt"), "User name: Debuger", (err) =>{
    if (err) throw err;
});
