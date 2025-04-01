class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {  // 'extends' allows one class to inherit properties and methods from another class. same as __proto__
    constructor(username, email, password) {
        super(username)   // Calls the parent class (User) constructor
        this.email = email
        this.password = password
    }
    // The Teacher class will get all the properties and methods of the User class but User class won't get access to Teacher and it's properties
    // This is an example of inheritance, which is a key concept in Object-Oriented Programming (OOP).

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

let chai = new Teacher('chai', 'chai@teacher.com', '123')
chai.logMe()  // Teacher can access User's properties and methods

let masalaChai = new User('masalaChai')
masalaChai.logMe()

console.log(chai === masalaChai)  // false
console.log(chai === Teacher)  // false  
console.log(chai instanceof Teacher)  // true    
console.log(chai instanceof User)  // true as Teacher inherits from User, chai is also considered an instance of User
// instanceof is an operator that checks if an object (chai) was created using a specific class or its parent classes. 