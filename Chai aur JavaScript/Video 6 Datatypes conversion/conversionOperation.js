let score = "33abc"
// console.log(typeof score);
// console.log(typeof (score));  // another way of writing typeof

let valueInNumber = Number(score)  // converts datatype into Number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  // display will be NaN as 33abc is not pure number

// Result of converting different datatypes into Number datatype:
// "33" => 33
// "33abc" => NaN
// "bhavay" => NaN
// true => 1; false => 0;
// null => 0
// undefined => NaN


let isLoggedIn = "bh"
let booleanIsLoggedIn = Boolean(isLoggedIn)  // converts datatype into Boolean 
// console.log(booleanIsLoggedIn);

// Result of converting different datatypes into Boolean datatype:
// 1 => true; 0 => false;
// "" => false
// "bhavay" => true 


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
