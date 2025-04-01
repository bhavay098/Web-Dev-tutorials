// for of
// for of loop iterates over the values of iterable objects like arrays, strings, or sets.

// Use Cases:-
// 1. Iterating through an array or string

// ["", "", ""]
// [{}, {}, {}]   // multiple objects inside an Array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

// Maps
// Map is a special object that stores key-value pairs while maintaining the order of insertion. Unlike regular objects {}, Maps allow any type of key (numbers, objects, functions, etc.).

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('FR', "France")
map.set('IN', "India")  // duplicate entry won't be added and replaced with the old one

// console.log(map);

for (const [key, value] of map) {   // prints key and value separately
    // console.log(key, ':-', value);
}

let myObj = {
    game1: 'NFS',
    game2: 'spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);    // won't work as objects are not iterable
// }
