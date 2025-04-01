// if
const isUserLoggedIn = true
const temperature = 41

// if (temperature === 40){   // the code will only execute if the condition is true
//     console.log("less than 50");
// } 
// else {
//     console.log("temperature is greater than 50");
// }
// console.log("execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);  // wont't execute has power is not accessible outside it's block

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test 2");    
// (implicit scope) shorthand for if.  // not recomended


// if (balance < 500) {
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {         // executes only when all the conditions are true
    console.log("Allowed to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {   // executes if one of the given conditions are true
    console.log("User logged in");
}