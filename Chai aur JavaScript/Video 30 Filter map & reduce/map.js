let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map() method creates a new array by applying a function to each element of the original array. It does not modify the original array. It returns a new transformed array.


// let newNums = myNumbers.map((num) => num + 10)  // adds 10 to each element of array and returns a new array
// console.log(newNums);


// let newNums = []
// myNumbers.forEach((num) => {   // performing same above task through for each
//     newNums.push(num + 10)
// })
// console.log(newNums);


let newNums = myNumbers
              .map((num) => num * 10 )  // Multiply each element by 10
              .map((num) => num + 1)    // Add 1 to each element
              .filter((num) => num >= 40)

// Method chaining is a technique in JavaScript where multiple methods are called on the same object in a single statement, improving readability and reducing extra variables.

console.log(newNums);