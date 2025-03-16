function sum(a,b) {
    return a + b;
}

// console.log(sum(1,2,3,4,5))

function sumAll(...args) {
    let sum = 0

    for(let arg of args) sum += arg;
    return sum
}

// console.log(sumAll(1,2,3,4,5,6,7,8));


function showName(firstName, lastName, ...titles) {
    console.log(firstName+ ' ' + lastName);
    console.log(titles[0])
    console.log(titles[1])
}

// console.log(showName('athul', 'amal', 'vishnu', 'salim'))


function showNames(){
    console.log(arguments.length)
}

// showNames('athul', 'amal', 'salim', 'vishnu', 'dony')

// console.log(showName.name)
// console.log(showName.length)

let obj = {
    name: 'athul',
    age: 50,
    id: 1,
}

let b = structuredClone(obj)

let obj1 = {
    name: 'athul',
    age: 30,
    address: {
        city: 'thrissur',
    }
}

let obj2 = { ...obj1 }

obj2.name = 'amal'
// console.log(obj1.name)
// console.log(obj2.name)

// obj2.address.city = 'palakkad'

let obj3 = JSON.parse(JSON.stringify(obj1));
obj3.address.city = 'palakkad'

console.log(obj3, obj1)
