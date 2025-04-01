const userEmail = []

if (userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {      // checks whether the array is empty or not
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {   // Object.keys returns the keys of object in an array
    console.log("Object is empty");         // checks whether the array is empty or not
}

// Nullish Coalescing Operator (??): null, undefined   // used when we don't want null and undefined values

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


// Ternary Operator

// condition ? true : false    // shorthand for if else statements

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

