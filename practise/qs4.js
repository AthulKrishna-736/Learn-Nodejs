const fs = require('node:fs');
const path = require('node:path');

// const file1 = fs.readFileSync("./views/file3.txt","utf-8");
const file1 = fs.readFileSync(path.join("views2","file3.txt"),'utf-8');
// console.log(file1);

const file2 = fs.readFileSync(path.join("../views1","file3.txt"),'utf-8');
// console.log(file2);

const file3 = fs.readFileSync('./views2/file3.txt','utf-8');
const file4 = fs.readFileSync('./file2.txt','utf-8')
// console.log(file4);
// console.log(file3);
// fs.writeFileSync("./file3.txt",file4 + file3);

// const cfiles = fs.readFileSync(path.join("C:/testfs/readme.txt"),'utf-8');
// console.log(cfiles);
// fs.writeFileSync("./file3.txt",cfiles);
// const dfiles = fs.readFileSync("./file2.txt",'utf-8');
// fs.writeFileSync("C:/testfs/readme1.txt",dfiles)
// fs.writeFileSync("C:/testfs/sample.txt",'this is a sample text which is send from the pracctise dir by using node js');

// fs.readFile('./file2.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// fs.writeFile("C:/testfs/asyncmeth.txt", data, (err)=>{
//     if(err){
//         console.log(err);        
//     }
// })
// })

fs.appendFileSync('./file3.txt',file2);

// const append = fs.readFile('./file4.txt')

fs.readFile('./file2.txt', 'utf-8',(err, data)=>{
    if(err){
        
        console.log(err);
    }
    else
    {
        console.log(data);
    }
    fs.appendFile('./file4.txt', data, (err)=>{
        if(err){
            console.log(err);
        }else{
        console.log('data is appended')
        }
    })
})