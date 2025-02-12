// const fs = require("node:fs");

// console.log("first")

// fs.readFile("./file.txt","utf-8",(err,data)=>{
//    console.log("dont try to play the fool with me niggesh -sura");
// })

// console.log("last");

const crypto = require("node:crypto");

const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

for(let i=1; i<=3;i++)
{
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512",()=>{
        console.log("Hash:", Date.now() - start);
    });
    

}