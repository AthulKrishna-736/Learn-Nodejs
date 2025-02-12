

// How spawn() Works
// spawn() creates a new process by running a command. It doesn’t buffer output like exec(), instead, it streams data. This makes spawn() useful for handling large outputs efficiently.

// Why Does spawn() Work Without Any Script?
// In our example:

// javascript
// Copy
// Edit
// const { spawn } = require('child_process');

// const child = spawn('echo', ['Hello from spawn() > child_output.txt']);

// child.on('exit', (code) => {
//   console.log(`Child process exited with code ${code}`);
// });
// 👉 What’s happening here?

// spawn('echo', ['Hello from spawn() > child_output.txt'])
// This runs the echo command.
// echo is a built-in system command that outputs text to the console or a file.
// The argument ['Hello from spawn() > child_output.txt'] means:
// "Hello from spawn()" is the message.
// > is a shell operator that redirects the output to child_output.txt.
// Does spawn() Always Need a Command?
// Yes! spawn() executes system commands.
// If you don't provide a command (like echo, ls, node, etc.), spawn() won’t know what to run.
// What If We Want to Write a File Without a Shell Command?
// Instead of spawn(), we can use fs (Node.js File System) inside a child process.


// 👉 The key fix is { shell: true }, which forces spawn() to run inside a shell.

// Alternative Approach (Cross-Platform)
// Instead of echo, we can use Node.js itself to write a file using spawn():

// javascript
// Copy
// Edit
// const { spawn } = require('child_process');

// const child = spawn(process.execPath, ['-e', `require('fs').writeFileSync('child_output.txt', 'Hello from spawn without shell!')`]);

// child.on('exit', (code) => {
//   console.log(`Child process exited with code ${code}`);
// });
// This method:
// ✅ Works on Windows, macOS, and Linux
// ✅ Uses Node.js directly, avoiding OS-specific commands

// 🔥 Final Takeaways
// spawn() does not run shell commands by default (unlike exec()).
// Use { shell: true } if running shell commands like echo, dir, or ls.
// For cross-platform solutions, use spawn() with Node.js scripts instead of shell commands.
// Would you like a practical example of using spawn() to process large data streams? 🚀

const { spawn } = require('child_process')

const child = spawn('echo', ['Hello from spawn child process > child_output.txt'], { shell: true });

child.on('exit', (code) => {
    console.log(`child process exxited with code ${code}`)
})


const script = `
const fs = require('fs');
const filePath = './output.txt';
try{
    fs.writeFileSync(filePath, 'hello this from child spawn process')
    console.log('file written successfully')
} catch(error) {
    console.log('error while writing file: ', error)
    process.exit(1)
}
`;

const child1 = spawn(process.execPath, ['-e', script]);

child1.stdout.on('data', (data)=>{
    console.log('output: ', data, data.toString())
})

child1.stderr.on('data', (data)=>{
    console.error('error: ', data, data.toString())
})

child1.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
})

