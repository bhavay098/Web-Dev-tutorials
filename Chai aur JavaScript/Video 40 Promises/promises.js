// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// A Promise in JavaScript is an object that represents the eventual completion (success) or failure of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations more effectively, avoiding callback hell. .then() handles success, .catch() handles errors, .finally() runs always.

let promiseOne = new Promise(function (resolve, reject) {   // Creating promise object
    // do an async task                                     // resolve → Called when the operation is successful.
    // DB calls, cryptography, network calls                // reject → Called when the operation fails.
    setTimeout(function () {
        console.log('Async task is complete')
        resolve()   // connected with .then
    }, 1000)
})

// .then() is a method used to handle the result of a Promise when it resolves successfully. When a Promise is fulfilled (resolved), .then() method executes the function inside it.

promiseOne.then(function () {         // .then() handles resolve   // promise.then(successCallback, failureCallback);
    console.log('Promise consumed')   // consuming the promise
})


new Promise(function (resolve, reject) {   // promise object can also be created without storing it in a variable
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 resolved')
})


let promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'chai', email: 'chai@example.com' })   // we can add any kinda datatype as parameters in resolve. here we added an object as parameter
    }, 1000)
})

promiseThree.then(function (user) {   // the data recieved from promise will be called user
    console.log(user);
})


let promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'Bhavay', password: '123' })
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

// .catch() is a method used to handle errors (rejected promises). It runs only when the Promise rejects (fails).

promiseFour
    .then((user) => {       // Chaining Multiple Promises
        console.log(user);
        return user.username   // this value will be returned in the next .then
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(() => {   // Runs always, whether resolved or rejected.
        console.log('The promise is either resolved or rejected')
    })
// .finally() is a method that runs after the Promise is settled (either resolved or rejected).


let promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'Javascript', password: '123' })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// async/await is a modern alternate way to handle asynchronous code instead of .then, .catch. It makes asynchronous code look synchronous, improving readability.
// async/await cannot handle errors so we have use try catch

async function consumePromiseFive() {   // async Declares a function as asynchronous, allowing the use of await.
    try {
        let response = await promiseFive   // await Waits for a Promise to resolve before proceeding.
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()


// fetch() is a built-in JavaScript function used to make network requests (like fetching data from an API). It returns a Promise, which resolves to the response from the server.

// async function getAllUsers() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users')
//         let data = await response.json()  // using await here as coverting data into json takes time
//         console.log(data)
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }
// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')  // performing the same above task using .then .catch
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})