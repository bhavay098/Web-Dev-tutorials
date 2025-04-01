// singleton - declaring object through constructor makes singleton (Interview ques)
// Object.create - Constructor method of creating object

// Object literals - Another way to declare objects

const mySym = Symbol("key1")  // Interview ques - use Symbol as a key in object. it is neccessary to declare the symbol first

const JsUser = {
    name: "Bhavay",
    "full name": "bhavay nagpal",
    [mySym]: "myKey1",  // Symbol is put in sqaure brackets
    age: 22,
    location: "Hisar",
    email: "bhavay@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);  // Accessing an object property through dot notation
// console.log(JsUser["email"]);  // Another way of accessing object through bracket notation
// console.log(JsUser["full name"]);  // full name contains space so it can only be accessed through bracket notation
// console.log(JsUser[mySym]);  // Symbol in object is accessed like this only

JsUser.email = "baba@gpt.com"  // changes the email of the object
// Object.freeze(JsUser)  // further changes in object won't happen
JsUser.email = "hari@gpt.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello Js user");
}

JsUser.greetingTwo = function () {
    console.log(`hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

