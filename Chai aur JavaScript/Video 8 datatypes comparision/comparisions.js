// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  // string has been converted to Number
// console.log("02" > 1);  // avoid comparing different datatypes  

console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null >= 0);  // true as Comparisons (>=, >, <, <=) convert null to 0. Equality (==) does NOT convert null to a number.
console.log(undefined == 0);  // Undefined is not equal to any number, including 0.

console.log("2" == 2);  // true
console.log("2" === 2);  // false as === checks value and datatype also
