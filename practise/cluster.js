const cluster = require('cluster')
const os = require('os')

const totalcpus = os.cpus().length

console.log(totalcpus);
