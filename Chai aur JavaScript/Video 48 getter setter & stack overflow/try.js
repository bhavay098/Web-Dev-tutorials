function sayHello() {
    return "Hello";
}

function displayMessage(func) {  // Accepts a function as an argument
    console.log(func());
}

displayMessage(sayHello); // Output: Hello


// fetch()
// function()     // important