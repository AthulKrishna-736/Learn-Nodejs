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

// console.log(obj3, obj1)


function a(cb, val){
    return cb(val)
}

function cb(value){
    console.log(value)
}

// a(cb, 7)


const userMap = new Map()
userMap.set("id", 1)
userMap.set('name', 'athul')
userMap.set('email', 'athul@example.com')

// console.log(userMap.get('name'))
// console.log(userMap.get('email'))

const uniqueNumbers = new Set()
uniqueNumbers.add(10)
uniqueNumbers.add(20)
uniqueNumbers.add(10)
// console.log(uniqueNumbers.has(10))
// console.log(uniqueNumbers.size)

let user = { name: 'athul' }
let weakMap = new WeakMap()
weakMap.set(user, 'Logger in')
// console.log(weakMap.get(user))

user = null

// console.log(weakMap.get(user))


let user1 = { name: 'hatihbaul' }
let weakSet = new WeakSet()
weakSet.add(user1)

// console.log(weakSet.has(user1))

user1 = null
// console.log(weakSet.has(user1))


let arr = ['smith', 'john', 'alen', 'kenny', 'louis']

let [first, ,second] = arr

// console.log(first, second)

let guest = 'Jane';
let admin = 'Pete';

[guest, admin] = [admin, guest];

// console.log(guest, admin); 

let obj4 = {
    name1:'athul',
    age1: 30,
}

let { name1, age1 } = obj4
// console.log(name1, age1)


let [val1, ...rest] = arr
// console.log(val1, rest)

let date = new Date()
// console.log(date)

let jan1 = new Date(0)
console.log(jan1)
let jan2 = new Date(24 * 3600 * 1000);
console.log(jan2)

let today = new Date()

today.setDate(today.getDate() - 14)

console.log(today)


let date1 = new Date()

date1 = new Date(date1 - 14*24*60*60*1000)

console.log(date1.toDateString())

// console.log(typeof NaN)
// console.log(NaN == NaN)


let dob = new Date(Date.UTC(2003, 0, 1, 0, 0, 0, 0));
console.log(dob.toISOString()); // Correct: "2003-01-01T00:00:00.000Z"
console.log(dob.getTime()); // Correct Unix timestamp



function getSecondsFromDate(dateString) {
    const specifiedDate = new Date(dateString); // Convert input to Date object
    const currentDate = new Date(); // Get current date and time

    if (isNaN(specifiedDate.getTime())) {
        console.error("Invalid date format. Please provide a valid date string.");
        return;
    }

    const millisecondsElapsed = currentDate - specifiedDate; // Difference in milliseconds
    const secondsElapsed = Math.floor(millisecondsElapsed / 1000); // Convert to seconds

    console.log(`Seconds elapsed from ${dateString} to now: ${secondsElapsed}`);
}

// getSecondsFromDate("2003-01-01T00:00:00Z");








