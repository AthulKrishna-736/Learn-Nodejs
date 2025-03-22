import fs, { write } from 'fs'
import { Duplex, Transform } from 'stream'

// const readableStream = fs.createReadStream('ouput1.txt', { encoding: 'utf-8', highWaterMark: 10 })

// readableStream.on('data', (chunk)=>{
//     console.log('Received chunk: ', chunk)
// })

// readableStream.on('end', ()=>{
//     console.log('file reading completed0')
// })


// const writableStraem = fs.createWriteStream('output1.txt');
// writableStraem.write('This one is doing writing on the streaming')
// writableStraem.write('\nAdding more contents again here')
// writableStraem.end('Done writing!')

// writableStraem.on('finish', ()=> {
//     console.log('writing completed')
// })


const readStream2 = fs.createReadStream('output1.txt')
const writableStream2 = fs.createWriteStream('input.txt')

// const myDuplex = new Duplex({
//     read(size){
//         console.log('Reading....')
//     },
//     write(chunk, encoding, cb){
//         console.log("Received: ", chunk.toString())
//         this.push(chunk.toString())
//         cb()
//     }
// })


// myDuplex.on('data', (chunk)=> {
//     console.log('Reading: ', chunk.toString())
// })


// readStream2.pipe(myDuplex).pipe(writableStream2)

// writableStream2.on('finish', ()=> {
//     console.log('Transformation complete!')
// })


// const transforStream = new Transform({
//     transform(chunk, encoding, callback){
//         this.push(chunk.toString().toLowerCase())
//         callback()
//     }
// })

// readStream2.pipe(transforStream).pipe(writableStream2)

// writableStream2.on('finish', ()=> {
//     console.log('finished writing')
// })


// const myDuplex1 = new Duplex({
//     read(size){
//         console.log('reading...')
//     },

//     write(chunk, encoding, callback){
//         console.log('Received: ', chunk.toString())
//         this.push(chunk.toString())
//         callback()
//     }
// })

// myDuplex1.on('data', (chunk)=> {
//     console.log('Data : ', chunk.toString())
// })

// readStream2.pipe(myDuplex1).pipe(writableStream2)

// writableStream2.on('finish', ()=> {
//     console.log('writing to this file also finished')
// })


const transform1 = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})

readStream2.pipe(transform1).pipe(writableStream2)

writableStream2.on('finish', ()=> {
    console.log('writing finished')
})

const buffer = Buffer.from('Hello world')
console.log(buffer)