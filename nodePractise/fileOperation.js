import fs, { read, write } from 'fs'

// console.log('before file reading....')
// const data = fs.readFileSync('../practise/example.txt', 'utf-8');
// console.log(data)
// console.log('after writing the function')

// console.log('before file reading...')
// fs.readFile('../practise/example.txt', 'utf-8', (err, data)=> {
//     if(err){
//         console.error(err)
//     } else {
//         console.log('data: ', data)
//     }
// })
// console.log('after function writing')


// fs.writeFileSync('../practise/example1.txt', 'Hello, world this is file written from other dir')
// console.log('the file has been written successfully')

// fs.writeFile('../practise/example1.txt', 'This is asynchronous file writing', (err)=> {
//     if(err) console.error(err)
//         console.log('file written async successfully')
// })


// fs.appendFileSync('../practise/example1.txt', '\nThis one may be different append but files changed', { flag: 'a' })


// fs.unlinkSync('../practise/example1.txt')
// console.log('file got deleted successfully')

// fs.unlink('../practise/example1.txt', (err)=> {
//     if(err) console.error(err)
//         console.log('file deleted successfully')
// })

// fs.mkdir('myFolder', (err)=> {
//     if(err) console.error(err)
//         console.log('Directory created');
// })


// fs.mkdirSync('myFolder1')
// console.log('Dir created')


// fs.mkdirSync('parent/child', { recursive: true })

// fs.rmdirSync('myFolder')
// console.log('dir deleted')

// fs.rmdir('myFolder1', (err)=> {
//     if(err) console.error(err)
//         console.log('Dir deleted with async')
// })

// fs.rmdirSync('parent', { recursive: true, force: true })

// if(fs.existsSync('createServer')){
//     console.log('file exists')
// } else {
//     console.log('file does not exist')
// }

// fs.stat('createServer.js', (err, stat)=> {
//     if(err) console.error(err);
//     console.log(stat)
// })

const readStream = fs.createReadStream('../Practise/example.txt', 'utf-8');
readStream.on('data', (chunk)=> {
    console.log('Chunk received: ', chunk)
})

readStream.on('end', ()=> console.log('File read complete'))

const writeStream = fs.createWriteStream('output.txt')
writeStream.write('Hello, this is streamed data')
writeStream.end();

// const writeStream1 = fs.createWriteStream('output1.txt')
// writeStream1.write('This is again writing to the new file here')
// writeStream1.end()

const writeStream1 = fs.createWriteStream('ouput1.txt')

readStream.pipe(writeStream1)

writeStream.on('finish', ()=>{
    console.log('file copied successfully')
})


