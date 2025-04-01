// Another method of using getter setter with Object
// Rarely used syntax

const User = {
    _email: 'h@hc.com',
    _password: 'abc',

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

// The Object.create() method is used to create a new object and set its prototype (inherit properties from another object). It gives more control over object creation compared to {} or new Object().
const tea = Object.create(User)  // const newObject = Object.create(proto, properties);
console.log(tea.email)