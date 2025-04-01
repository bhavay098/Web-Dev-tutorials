// var c = 300
let a = 300

if (true) {      // these curly braces are called scopes
    let a = 10
    const b = 20
    // console.log("Inner:", a);  // here block value of a will be printed
}

// console.log(a);  // here global vaue of a will be printed
// console.log(b);  // not defined as const is block scoped
// console.log(c);  // output will be 30 

// Interview - Scoping in code environment and browser is different


function one() {
    const username = "bhavay"

    function two() {
        const website = "youtube"
        // console.log(username);   // nested function can access it's parent function's variables
    }
    // console.log(website);   // it won't be executed as variable website can't be accessed outside it's block

    two()
}

// one()

if (true) {
    const username = "bhavay"

    if (username === "bhavay") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // it won't be executed as variable website can't be accessed outside it's block
}

// console.log(username);  // it won't be executed as variable username can't be accessed outside it's block


// ++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++



console.log(addone(5));  // it prints even before declaring the function
function addone(num) {
    return num + 1
}



addTwo(5)  // it won't print before declaration
const addTwo = function (num) {   // declaring function like this is called function expression
    return num + 2                // The variable name acts as the function's identifier.
}
