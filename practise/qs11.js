const Eventemitter = require('events')
const fs = require('fs')

const customemitter = new Eventemitter()

console.log('starting of code')

customemitter.on('fileread' ,(content)=>{
    console.log(content)
})

const reading = (path,encoding)=>{
    // console.log("this is sample event response")
    fs.readFile(path,encoding,(err, data)=>{
        if(err){
            console.log('error reading file')
        }
        else{
            customemitter.emit('fileread',data)
            console.log('data read successfully')
        }
    })
}
reading('./testfile2.txt','utf-8');
console.log('ending of code')
// customemitter.emit('response','./testfile.txt','utf-8');


