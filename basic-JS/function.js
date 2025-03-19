//first class function
const greet = function (name) {
    return name
}
// console.log(greet('athul'))

//hoc function
function add(a, b, fn){
    return fn(a,b)
}

function fn(val1, val2){
    return val1 + val2
}
// console.log(add(1,3, fn))

//pure function 
function add1(a,b){
    return a + b
}

// console.log(add1(1,2))

//factory function 
function createUser(name, age){
    return {
        name: name,
        age: age,
        greet(){
            return `hi iam ${this.name}`
        }
    }
}

const user1 = createUser('athul', 25)
// console.log(user1.greet())


//iife function 
// (function() {
//     console.log("I am an IIFE!");
// })();



//callbackfunction 
function hello(cb){
    cb()
}

function cb(){
    console.log('THIS IS am callbackfunction')
}

// hello(cb)


//arrow function
const arrow = ()=> {
    console.log('simple arrow function')
}


//generator function 
function* numGen(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = numGen()
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)


function add2 (x){
    return function inner(y){
        return x + y
    }
}

let addition = add2(10)
// console.log(addition(15))

let animal = {
    eats: true
}

let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal

console.log(rabbit.eats)
console.log(rabbit.jumps)


function* numberGenerator() {
    let number = 1;
    while (number <= 3) {
        yield number;
        number++;
    }
}

const generator = numberGenerator();

// console.log(generator.next()); // { value: 1, done: false }
// console.log(generator.next()); // { value: 2, done: false }
// console.log(generator.next()); // { value: 3, done: false }
// console.log(generator.next()); // { value: undefined, done: true }



function add(a, b, c) {
    return a + b + c;
}



function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 1000);
});

// myPromise.then((message) => {
//     console.log(message); // Outputs: Promise resolved!
// }).catch((error) => {
//     console.error(error);
// });

function greet1(name) {
    console.log(`Hello ${name}! My name is ${this.name}`)
}

let person = {
    name: 'John'
}

greet1.call(person, "alice")

function addition1 (a,b){
    return a + b
}

let number = [1,2]

console.log(addition1.apply(null, number))


let person1 = {
    fullName: function () {
        return this.firstName+ " " + this.lastName;
    }
}

let users = {
    firstName: 'athul',
    lastName: 'krishna',
}

console.log(users)
const userfullName = person1.fullName.bind(users)
console.log(users)
userfullName()











