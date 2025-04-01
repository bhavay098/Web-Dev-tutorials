const user = {
    username: 'Bhavay',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        // console.log('Got user details from database')
        // console.log(`username: ${this.username}`)   // 'this' is neccessary to access properties of object
        console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)  // this will give empty output in node environment but in case of browser, the output will be window object


function User(username, loginCount, isLoggedIn) {   // constructor function
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function () {
        console.log(`Welcome ${this.username}`)
    }
    return this       // Returns the object automatically (even though we don’t explicitly return it).
}
// this.username = username; means:
// We are assigning the value of username (passed as an argument) to a property called username on this.
// this refers to the object that calls this function.


const userOne = new User('Bhavay', 12, true)    // 'new' creates a new empty object.
const userTwo = new User('ChaiAurCode', 11, false)
console.log(userOne)
console.log(userTwo)