// let myName = 'bhavay     '
// let myChannel = 'chai     '

// console.log(myName.trueLength);

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: function () {
        console.log(`spidey power is ${this.spiderman}`)
    }
}

Object.prototype.bhavay = function () {   // adding a new method hitesh() to the Object.prototype, meaning all objects in JavaScript will now have access to this method.
    console.log('bhavay is present in all objects')
}

Array.prototype.heyBhavay = function () {
    console.log('Bhavay says hello')
}

// heroPower.bhavay()
// myHeros.bhavay()
// myHeros.heyBhavay()
// heroPower.heyBhavay()  // Object doesn't have access to this method as it was given only to Array


// +++++++++ Inheritance +++++++++++++++

const user = {
    name: 'chai',
    email: 'chai@google.com'
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: teachingSupport   // TASupport now has access to teachingSupport's properties
}

teacher.__proto__ = user   // teacher now has access to user's properties

// Modern syntax

Object.setPrototypeOf(teachingSupport, teacher)   // teachingSupport now has access to teacher's properties

// Since teacher already inherits from user, teachingSupport also gets access to user's properties.
// TASupport  -->  teachingSupport  -->  teacher  -->  user  -->  Object.prototype  -->  null


let anotherUsername = 'chaiAurCode       '

String.prototype.trueLenght = function(){   // adding a custom method to all strings in JavaScript.
    console.log(`${this}`)   // 'this' refers to the object that called the method.
    console.log(`True length is: ${this.trim().length}`)   // Logs the actual length after trimming spaces
}
// adds a new method trueLenght() to all strings, meaning every string now has access to this function.

anotherUsername.trueLenght()
'bhavay'.trueLenght()
'iceTea'.trueLenght()