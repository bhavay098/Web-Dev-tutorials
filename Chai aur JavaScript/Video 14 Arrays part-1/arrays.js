// Arrays

const myArr = [0, 1, 2, 3, 4, 5]  // Arrays are always written within square brackets []
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)  // another way of declaring array - Array constructor

// console.log(myArr[0]);  // accessing the element at index 0

// Array methods

// myArr.push(6)  // adds elements to the end of an array
// myArr.pop()  // removes the last element from an array and returns it.
// myArr.unshift(9)  // adds elements to the start of an array. should be used carefully as it shifts the index values of the whole array
// myArr.shift()  // removes the first element from an array and returns it.

// console.log(myArr.includes(9));  // checks if an array contains a specific value and returns a boolean (true or false).
// console.log(myArr.indexOf(3));  // Returns the index of the first occurrence of a value in an array. -1 if the value does not exist in the array.

// const newArr = myArr.join()  // converts an array into a string by joining all elements with a separator (default is a comma ,).  
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // used to extract a portion of an array without modifying the original array. end index is not included

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)  // used to modify an array by removing, replacing, or adding elements. ending index is included. splice changes the original array.
console.log(myn2);
console.log("C ", myArr);


// Interview question: Main difference between slice and splice?
// Answer => Slice doesn't modify the original array but splice modifies the original array. ending index in slice is exclusive but inclusive in splice.