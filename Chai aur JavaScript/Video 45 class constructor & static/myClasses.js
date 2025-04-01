// ES6

class User {   // Defines a template for creating User objects.
    constructor(username, email, password) {   // A special function that runs when an object is created.
        this.username = username;   // Assigns values to the object’s properties.
        this.email = email;
        this.password = password;
    }

    encryptPassword() {   // injecting Method
        return `${this.password}abc`   // Defines actions that objects can perform.
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

// Creating objects from the class
let chai = new User('chai', 'chai@gmail.com', '123')

console.log(chai.encryptPassword());  // using the method
console.log(chai.changeUsername());


// ++++++++++++++ Behind the scene (doing the same above task without using class) +++++++++++++++++


function User(username, email, password) {   // creating constructor function
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {   // injecting method
    return `${this.password}abc`
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

// Creating objects from the constructor function
let tea = new User('tea', 'tea@gmail.com', '123')

console.log(tea.encryptPassword());  // using the method
console.log(tea.changeUsername());