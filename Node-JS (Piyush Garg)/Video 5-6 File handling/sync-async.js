const fs = require('fs');
const os = require('os'); // module that lets you interact with and get information about the operating system — like CPU, memory, network interfaces, uptime, and more.
console.log(os.cpus().length);  // displays the number of cores in my machine

console.log(1);

// Blocking request (Synchronous)
// const result = fs.readFileSync('contacts.txt', 'utf8');
// console.log(result);

// Non Blocking request (Asynchronous)
fs.readFile('contacts.txt', 'utf8', (err, result) => {
    console.log(result);
});

console.log(2);
console.log(3);
console.log(4);

// Default thread pool size = 4
// Max thread pool size = 128