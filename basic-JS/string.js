function revString(str){
    let temp = ''
    for(let val of str){
        temp = val + temp
    }
    return temp;
}

// console.log(revString('Hello world'))

function toUpperCase(str){
    let temp = '';
    for(let val of str){
        // console.log(val, (val.charCodeAt(0) - 32))
        if(val == ' '){
            temp += val
        } else {
            temp = temp + String.fromCharCode(val.charCodeAt(0) - 32)
        }
    }
    return temp
}

// console.log(toUpperCase('this is a sample string'))


function replaceSpace(str) {
    let temp = '';
    for(let val of str){
        if(val == ' '){
            temp += val.replace(' ', '-') // or temp += '-'
        } else {
            temp += val
        }
    }
    return temp
}

// console.log(replaceSpace('this is sample hello world program!'))

function startsWith(str, start){
    for(let i = 0; i<start.length; i++){
        if(str[i] !== start[i]) return false
    }
    return true
}

// console.log(startsWith('hello', 'hes')) // same we can do with str.startsWith(start)

function extractChar(str, val){
    let temp = '';
    if(val > str.length) return false
    for(let i = 0; i<val; i++){
        temp += str[i]
    }
    return temp
}

// console.log(extractChar('helloWorld', 5))


function countOccurence(str, char){
    let count = 0;
    for(let val of str){
        if(val == char){
            count++
        }
    }
    return count
}

// console.log(countOccurence('hello world of javascript', 'a'))

function longestWord(str){
    let arr = []
    let word = '';
    for(let i = 0; i<str.length; i++){
        if(str[i] == ' '){
            arr.push(word)
            word = ''
            continue
        } else {
            word += str[i]
        }
    }
    arr.push(word)
    let highest = arr[0]
    for(let val of arr){
        if(val.length > highest.length){
            highest = val
        }
    }
    return highest
}

// console.log(longestWord('The quick brown fox'))


function longestWordReduce(str){
    let str1 = str.split(' ');
    let result = str1.reduce((longest, word) => {
        if(word.length > longest.length){
            longest = word
        }
        return longest
    }, '') 
    console.log(result)
}

// longestWordReduce('The quick brown fox from canada')


function isPallindrome(str){
    for(let i = 0; i< str.length; i++){
        if(str[i] == str[str.length - 1 - i]){
            return true
        }
        return false
    }
}

console.log(isPallindrome('hello world'))
console.log(isPallindrome('mom mom'))


