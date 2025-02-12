const fs = require("node:fs");


fs.readFile(__filename, ()=>{
    console.log("this is readfile 1");
})
setTimeout(()=> console.log("this is settimeout funtion"),0);


// process.nextTick(()=> console.log("this is process of nextick 1"));
// Promise.resolve().then(()=> console.log("this is a promise 1"));
