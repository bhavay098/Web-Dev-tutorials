// for in loop
// The for in loop iterates over the keys (property names) of an object.

// Use Cases:-
// 1. Iterating through an object's properties

let myObj = {
    js: "JavaScript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {    // object can be iterated by for in loop
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

let programming = ['js', 'rb', 'py', 'java', 'cpp']  

for (const key in programming) {
//    console.log(programming[key]);  // arrays also have keys which are always a no. & start from 0
}
// Note: Avoid using for in for arrays, as it may iterate over inherited properties and doesn't guarantee order.


// const map = new Map()
// map.set('IN', "India")    // .set() method is used to add or update key-value pairs in a Map object.
// map.set('USA', "United states of america")
// map.set('FR', "France")
// map.set('IN', "India")

// for (const key in map) {     // map cannot be iterated with for in loop since it is not a plain JavaScript object,
//     console.log(key);
// }