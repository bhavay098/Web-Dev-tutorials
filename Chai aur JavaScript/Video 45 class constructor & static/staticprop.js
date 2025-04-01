class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

    static createId() {  // static method is a function that can only be called on the class itself, not on its instances. it belongs to the class, not individual objects.
        return `123`
    }
}

let bhavay = new User('bhavay')
// console.log(bhavay.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

let iphone = new Teacher('iphone', 'i@phone.com')
console.log(iphone.createId())  // error as this method is static. iphone is an instance, not a class.
console.log(Teacher.createId())  // only direct classes can access static methods and not objects
// When a class inherits another class, static methods and properties are also inherited.