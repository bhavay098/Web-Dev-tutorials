const user = {
    username: "bhavay",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to  website`);  // this keyword refers to the current context (object itself)
        console.log(this);
    }
}

// user.welcomeMessage()  // parenthesis () needed to run method
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // Interview: 
// current context is empty object as we are in node environment, no context in global rn
// In browser the value shown will be Window as this is the global object in browser

// function chai(){
//     let username = "bhavay"
//     console.log(this.username);  // "this" can only be used in objects
// }
// chai()

// const chai = function () {
//     let username = "bhavay"
//     console.log(this.username);
// }


const chai = () => {          // Arrow function
    let username = "bhavay"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {    // Basic Arrow function
//     return num1 + num2              // writing return is imp while using {}
// }

// const addTwo = (num1, num2) => num1 + num2   // implicit return - only works in single line function

// const addTwo = (num1, num2) => (num1 + num2)   // no need to write return while using ()

const addTwo = (num1, num2) => ({username: "bhavay"})   // returning object in function

console.log(addTwo(3, 4));