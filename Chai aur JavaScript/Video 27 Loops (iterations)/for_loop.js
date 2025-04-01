// for loop
// The for loop is used when the number of iterations is known beforehand. It consists of three parts:
// Initialization (executes once before the loop starts)
// Condition (checked before every iteration)
// Increment/Decrement (executes after each iteration)

// Use Cases:-
// 1. Iterating through an array
// 2. Running a loop a fixed number of times


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element);   // not accessible outside it's block

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
    
}

let myArr = ["flash", "batman", "superman"]
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break               // stops the loop here only
//     }
//     console.log(`value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue             // Skips the current iteration and continues the loop
    }
    console.log(`value of i is ${index}`);
    
}

