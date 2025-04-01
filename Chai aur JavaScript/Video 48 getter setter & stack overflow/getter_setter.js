// In JavaScript, getters and setters are special methods that allow you to get (retrieve) and set (update) the value of an object’s property in a controlled way.
// They are defined inside objects using the get and set keywords.

class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {   // Getter
        return this._email.toUpperCase()  // (private property) Prefix property names with an underscore (_) to indicate it should not be accessed directly.
    }

    set email(value) {   // Setter
        this._email = value
    }

    get password() {     // the name of the property and method should be same
        return `${this._password}bhavay`
    }

    set password(value) {   
        this._password = value
    }
}

let bhavay = new User('b@bhavay.ai', 'abc')
console.log(bhavay.email);


// all of this is modern syntax of getter setter which is used 90% of the time