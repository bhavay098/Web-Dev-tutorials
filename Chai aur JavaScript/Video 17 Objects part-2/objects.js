// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {               // adding object in object  
        userfullname: {
            firstname: "bhavay",
            lastname: "nagpal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  // accessing objects within objects

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)  // Object.assign(target, source1, source2, ...);  
// a method used to copy properties from one or more objects into a target object.

const obj3 = { ...obj1, ...obj2 }  // spread operator - more preferable and easy
// console.log(obj3);

const users = [   // Array containing multiple objects
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
]

users[1].email  // accessing objects in the array
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // returns an array of all the keys (property names) of an object. 
console.log(Object.values(tinderUser));  // returns an array of all the values of an object’s properties.
console.log(Object.entries(tinderUser));  // returns an array of arrays, where each sub-array contains [key, value].
console.log(tinderUser.hasOwnProperty('isLoggedin'));  // checks whether an object contains a specific property (key) or not.

