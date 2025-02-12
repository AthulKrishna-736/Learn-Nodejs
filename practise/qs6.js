let fs = require('fs')

fs.open('newfile.txt', 'a', (err, file)=>{
    if(err){
        console.log('error occured cant create file.!')
    }
    fs.writeFile(file,'just fking go bitch amm1234567890',(err)=>{
        if(err){
            console.log('error cant write')
        }
        else{
            console.log('saved!')
        }
    })
   

})