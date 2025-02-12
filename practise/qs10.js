const { log } = require('console')
const fs = require('fs')
const util = require('util')

// const reading = util.promisify(fs.readFile)
// const writing = util.promisify(fs.writeFile)

console.log('start')
// const azync = async()=>{
//     const read1 = await reading('./testfile.txt','utf-8')
//     const read2 = await reading('./testfile1.txt','utf-8')
//     console.log(`1 - ${read1} , 2 - ${read2}`)
//     await writing('./testfile2.txt',`this is me , ${read1} , ${read2}`,{flag : 'w'})
// }
// azync()

// const readfn = (path)=>{
//     return new Promise((resolve, reject)=>{
//         fs.readFile(path, 'utf-8', (err, data)=>{
//             if(err){
//                 reject('error while reading')
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// const writefn = (path,datas)=>{
//     return new Promise((resolve, reject)=>{
//         fs.writeFile(path, datas, 
//             {flag:'w'}, (err)=>{
//         if(err){
//             reject('error occur while writing')
//         }
//         else{
//             resolve('written successfully')
//         }
//         })
//     })
// }

// writefn('./testfile2.txt')

// readfn('./testfile.txt')
// .then((res)=> console.log(res)
// )
// .catch((err)=> console.log('error in reading'))

// readfn('./testfile1.txt')
// .then((res)=> console.log(res)
// )
// .catch((err)=> console.log('error in reading'))

// const azync = async()=>{
//     try{
//         const read1 = await readfn('./testfile.txt')
//         const read2 = await readfn('./testfile1.txt')
//         console.log(read1)
//         console.log(read2)
//         await writefn('./testfile2.txt', `this is azync ${read1}, ${read2}`)
//     }
//     catch(err){
//         console.log('issue while reading or writing')
//     }
// }
// azync()

const reading = util.promisify(fs.readFile)
const writing = util.promisify(fs.writeFile)

const azync = async ()=>{
    const read1 = await reading('./testfile.txt','utf-8')
    const read2 = await reading('./testfile1.txt','utf-8')
    console.log(read1)
    console.log(read2)
    await writing('./testfile2.txt',`this is util write , ${read1}, ${read2}`, {flag:'w'})
}
azync()
console.log('sync task ended')
console.log('async task started');

