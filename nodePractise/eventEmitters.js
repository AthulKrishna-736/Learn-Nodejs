import EventEmitter from 'events'

const myEmitter = new EventEmitter()

// myEmitter.on('greet', ()=> {
//     console.log('Hello welcome')
// })

// myEmitter.emit('greet')

// const user = (userName)=> {
//     console.log(`User ${userName} has logged in`);
// }

// myEmitter.on('userlogged', user)

// myEmitter.emit('userlogged', 'Athul')
// myEmitter.removeListener('userlogged', user)
// myEmitter.emit('userlogged', 'amal')

// myEmitter.on('error', (err)=> {
//     console.log(err.message)
// })

// myEmitter.emit('error', new Error('Something went wrong!'));


// myEmitter.on('chill', (val)=> {
//     console.log('child evenlistener 1', val)
// })

// myEmitter.on('chill', (val)=> {
//     console.log('chill event listner 2', val)
// })

// myEmitter.emit('chill', 'Sample')
// myEmitter.emit('chill', 'Easyone')

// myEmitter.on('asyncEvent', ()=>{
//     setImmediate(()=>{
//         console.log('sample event')
//     })
// })

// console.log('sample check 1')
// myEmitter.emit('asyncEvent')
// console.log('sample finished')

