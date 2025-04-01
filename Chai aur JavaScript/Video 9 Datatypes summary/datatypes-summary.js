// Two categorization of Datatypes are Primitive & Non primitive (Reference type)

// Primitive Datatypes:

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint

let score = 100  // Number
let isLoggedIn = false  // Boolean
let outsideTemp = null  // nulls means eampty
let userEmail;  // undefined as value not defined yet
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);  // the result will not be same even if entered values are same
const bigNumber = 3723812382163821991n  // Bigint for very big numbers



// Reference (Non Primitive):

// Array, Objects, Functions

let heros = ["shaktiman", "nagraj", "doga"]  // Array

let obj = {
    name: "Bhavay",  // Object
    age: 22
}

const myFunction = function () {  // Function (declaring through variable)
    console.log("Hello world");
}

console.log(typeof heros);  // typeof tells the datatype

// https://262.ecma-international.org/5.1/#sec-11.4.3 


// # Interview ques: is JS Dynamically typed or static typed?
// Answer - Dynamic as in dynamically typed languages, you don’t have to declare a variable’s type explicitly. JavaScript automatically changes the type based on the assigned value.