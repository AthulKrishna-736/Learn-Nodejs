import { spawn } from 'child_process';

const child = spawn('cmd', ['/c', 'dir'])

child.stdout.on('data', (data)=>{
    console.log(`Assistant Chef says:${data}`)
});

child.stderr.on('data', (data)=>{
    console.error(`Error ${data}`)
})

child.on('close', (code)=>{
    console.log(`Assistant chef finished with code ${code}`)
})








