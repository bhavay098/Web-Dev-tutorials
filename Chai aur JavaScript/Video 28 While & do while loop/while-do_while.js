// while loop
// while loop is used when you want to run a block of code repeatedly as long as a condition is true.

// Use Cases:-
// 1. When the number of iterations is unknown beforehand
// 2. Reading user input until a valid response is given

let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2   // increases index by 2
// }

let myArr = ['flash', 'batman', 'superman']
let arr = 0
while (arr < myArr.length) {
    // console.log(`value is ${myArr[arr]}`);
    arr++;
}


// do while loop
// The do while loop is similar to while, but ensures that the loop runs at least once, even if the condition is false from the beginning.

// Use Cases:-
// 1. When you need to execute the loop at least once before checking the condition
// 2. Menu-driven programs where users must make at least one selection

let score = 11
do {
    console.log(`score is ${score}`);  // code is executed first and then the condition is checked
    score++;
} while (score <= 10); 