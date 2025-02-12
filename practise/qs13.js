const fs = require('fs')

for(let i=1; i<=10000; i++){
    fs.writeFileSync('./bigdata.txt',`counting ${i}\n`, {flag:'a'})
}