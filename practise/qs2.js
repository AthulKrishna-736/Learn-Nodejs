// const http = require('node:http')
const path = require('node:path')

// const filename = path.isAbsolute('./es6/qs1.js')

const filename = path.isAbsolute('C:/Users/Athul/Pictures/Camera Roll/Athul.jpg')
console.log(filename)

const pathobj ={
    root:'/',
    dir:'/home/users',
    base:'file.txt',
    ext:'.txt',
    name:'file'
};


console.log(path.format(pathobj))
const a = path.join(__dirname,"file.txt");
console.log(a);
const b = path.normalize("course//pack\\/utils.js")
console.log(b);
const c = path.resolve(1,"niggs","blacks","workers");
console.log(c)