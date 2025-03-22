import cluster from 'cluster'
import os from 'os'

const totalcpus = os.cpus().length

console.log(totalcpus);

if(cluster.isMaster){
    console.log('master is running: ', process.pid)

    for(let i = 0; i < totalcpus; i++){
        console.log('creating cpus: ')
        cluster.fork()
    }
} else {
    console.log('Worker is this', process.pid)
}
















