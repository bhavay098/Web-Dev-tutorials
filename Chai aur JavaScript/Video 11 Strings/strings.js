const name = "Bhavay"
const repoCount = 50
// console.log(name + repoCount + " value");  // concatinates the strings

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // template literals - string interpolation

const gameName = new String("Bhavay-hc-com")  // another way of declaring strings. it creates a string object rather than a primitive string but the original string value is always immutable.

// console.log(gameName[0]);
// console.log(gameName.__proto__);  // __proto__ is a reference to the prototype of an object.

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));  // displays the character at 3rd index
// console.log(gameName.indexOf("a"));  // displays the index of character

const newString = gameName.substring(0, 4)  // characters from index 0 to 3 will be displayed. index at end is exclusive. substring doesn't accept negative values
// console.log(newString);

const anotherString = gameName.slice(-8, 4)  // The negative index means count from the end of the string.
console.log(anotherString);

const newStringOne = "   Bhavay   "
console.log(newString);
console.log(newString.trim());  // extra spaces will be trimmed

const url = "htttps://bhavay.com/bhavay%20nagpal"
console.log(url.replace('%20', '-'));  // used to replace characters of a string

console.log(url.includes('bhavay'));  // whether url contains the character 'bhavay' - true or false

console.log(gameName.split('-'));  // splits the strings on basis of the separator provided and converts them into array


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 







