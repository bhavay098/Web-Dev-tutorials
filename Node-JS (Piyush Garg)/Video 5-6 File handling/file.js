const fs = require('fs');  // using require() to import fs module (file system)

// fs.writeFileSync('./test.txt', 'Hello world');  // creating a file in current directory & putting data in it (Synchronous)

// fs.writeFile('./test.txt', 'Hello world Async', (err) => {});  // creating a file in current directory & putting data in it (Asynchronous)

// const result = fs.readFileSync('./contacts.txt', 'utf8');  // reading the data in an existing file and using utf8 encoding (Synchronous)
// console.log(result);

// fs.readFile('./contacts.txt', 'utf8', (err, result) => {  // reading the data in an existing file and using utf8 encoding (Asynchronous)
//     if (err) {
//         console.log('ERROR', err);
//     } else {
//         console.log(result);
//     }
// });

// Note - Synchronous functions return something but Asynchronous don't

// fs.appendFileSync('./test.txt', ' yooo')  // adds data to the end of a file instead of overwriting it (Synchronous).
// fs.appendFileSync('./test.txt', 'hey there\n');  // adda data in the next line
// fs.cpSync('./test.txt', './copy.txt');  // used to copy files or folders synchronously
// fs.unlinkSync('./copy.txt');  // deletes a file from our file system synchronously (only works for files and not folders)
console.log(fs.statSync('./test.txt'));  // synchronous method that returns metadata (info) about a file or folder — like its size, creation date, whether it’s a file or a directory, etc.
// fs.mkdirSync('./my-docs');  // creates new folder (directory) in the current working directory
fs.mkdirSync('./my-docs/a/b', { recursive: true });  // creates folders within folder (directory) in the current working directory