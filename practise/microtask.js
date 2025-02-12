// console.log("console log 1");

// process.nextTick(()=>{
//     console.log("this is a process.next");
// })
// console.log("console log2");


process.nextTick(()=>{
    console.log("this is process nexttick 1");
})
process.nextTick(()=>{
    console.log("this is process nexttick 2");

    process.nextTick(()=>{
        console.log("this is inner text of process nexttick ");
    })
})
process.nextTick(()=>{
    console.log("this is process nexttick 3");
})

Promise.resolve().then(()=>{
    console.log("this is promise.resolve 1");
})
Promise.resolve().then(()=>{
    console.log("this is promise.resolve 2");

    process.nextTick(()=>{
        console.log("this is inner next tick promise.resolve ");
    })
})
Promise.resolve().then(()=>{
    console.log("this is promise.resolve 3");
})
