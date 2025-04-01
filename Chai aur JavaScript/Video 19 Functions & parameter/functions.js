
function sayMyName() {
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
    console.log("A");
    console.log("Y");
}

// sayMyName    // this is only the reference of the function
// sayMyName()  // parenthesis is necessary to execute the function

// function addTwoNumbers(number1, number2) {   // here values inside () are parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2   // sends the computed result back to the caller
}

const result = addTwoNumbers(3, 5)  // here values inside () are arguments

// console.log("result:", result);


function loginUserMessage(username = "sam") {   // default value will be sam if user doesn't input anything
    if (!username) {                              // This condition checks whether username is falsy.
        console.log("Please enter a username");
        return
    }
    return `${username} just loggen in`
}

// console.log(loginUserMessage("Bhavay"));
console.log(loginUserMessage());  // Interview - no value passed so result will be undefined
