const score = 400  // datatype is Number
// console.log(score);


const balance = new Number(400)  // datatype is object (Number object)
// console.log(balance);

// console.log(balance.toString());  // converts number into string
// console.log(balance.toString().length);  // after becoming string, it also has access to string methods
// console.log(balance.toFixed(2));  // formats a number to n decimal places. returns a string value

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));  // formats a number to a specified total number of significant digits. It returns the result as a string.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // useful for displaying numbers in different formats based on the user’s locale


// ++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  // used to change negative values to positive
// console.log(Math.round(4.3));  // used to get round of values
// console.log(Math.ceil(4.2));  // used to get round of values, chooses higher value
// console.log(Math.floor(4.9));  // used to get round of values, chooses lower value
// console.log(Math.min(4, 3, 6, 8));  // gives the minimum value
// console.log(Math.max(4, 3, 6, 8));  // gives the maximum value

console.log(Math.random());  // generates a random number between 0 and 1 
console.log((Math.random() * 10) + 1); 
console.log(Math.floor(Math.random() * 10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));
