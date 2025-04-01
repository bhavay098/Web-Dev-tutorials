// Interview Question - can the value of Math.PI be changed? answer is 'NO'. explanation is given below

// console.log(Math.PI);  
// Math.PI in JavaScript is a property of the Math object that represents the mathematical constant π (pi), which is approximately 3.14159. Since Math.PI is a read-only property, you cannot change its value:

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor)

// let myNewObject = Object.create(null)
// The Object.create() method is used to create a new object with a specified prototype.

let chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log('chai nahi bani')
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai, 'name', {  // Modifying a Property Descriptor using Object.defineProperty()
    // writable: false,
    enumerable: false  // iteration disabled on name property
})

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (let [key, value] of Object.entries(chai)) {  // Convert the object into an array of [key, value] pairs using Object.entries():
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)  // error as objects are not iterable using a for...of loop so we use Object.entries()
    }
}