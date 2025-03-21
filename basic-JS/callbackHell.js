function step12(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step22(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step32(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

// Nested callbacks (Callback Hell)
// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps completed");
//         });
//     });
// });


function step1(callback){
    console.log('step 1 completed')
    callback()
}

function step2(callback){
    console.log('step 2 is completed')
    callback()
}

function step3(callback){
    console.log('step 3 is completed')
    callback()
}

function finalStep(){
    console.log('final step completed')
}

// step1(()=>{
//     step2(()=> {
//         step3(()=> {
//             finalStep()
//         })
//     })
// })


function promise1() {
    return new Promise((resolve)=>{
        console.log('step 1 is completed')
        resolve();
    })
}

function promise2(){
    return new Promise((resolve)=> {
        console.log('step 2 is completed')
    })
}

function promise3(){
    return new Promise((resolve)=> {
        console.log('step 3 is completed')
        resolve()
    })
}

// promise1()
// .then(()=> promise2())
// .then(()=> promise3())
// .then(()=> finalStep())
// .catch((err)=> console.log('error', err));


function asyncPromise1(){
    return new Promise((resolve)=> {
        console.log('promise1 resolved')
        resolve()
    })
}

function asyncPromise2(){
    return new Promise((resolve)=> {
        console.log('promise2 resolved')
        resolve()
    })
}

function asyncPromise3(){
    return new Promise((resolve, reject)=> {
        console.log('Promise3 resolved')
        reject('random rejection')
    })
}

async function cbHellPromise() {
    try {
        await asyncPromise1()
        await asyncPromise2()
        await asyncPromise3()
    } catch (error) {
        console.log('error: ', error)
    }
}

cbHellPromise()