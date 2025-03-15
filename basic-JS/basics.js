function sum(a,b) {
    return a + b;
}

console.log(sum(1,2,3,4,5))

function sumAll(...args) {
    let sum = 0

    for(let arg of args) sum += arg;
    return sum
}