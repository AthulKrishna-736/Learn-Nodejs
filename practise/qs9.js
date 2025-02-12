const { log } = require('console')
const fs = require('fs')
const util = require('util')

const read1 = util.promisify(fs.readFile)
const write1 = util.promisify(fs.writeFile)

const reading = async()=>{
    try{
        console.log('read succesfully');
        
        const first = await read1('./testfile.txt','utf-8')
        const second = await read1('./testfile1.txt','utf-8')
        await write1('./testfile2.txt',`This is written : ${first} , ${second}`)
    }
    catch(err){
        console.log('error doing operations')
    }
}
reading()
 