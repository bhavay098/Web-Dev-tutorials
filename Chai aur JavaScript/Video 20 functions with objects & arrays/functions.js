function calculateCartPrice(val1, val2, ...num1) {  // rest operator(...) - Collects multiple function arguments into a single array.
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "bhavay",
    price: 199
}

function handleObject(anyobject) {   // Object in function
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",   // another way in which first declaring an object isn't neccessary
    price: 399
})


const myNewArr = [200, 400, 100, 600]

function returnSecondValue(getarray) {   // Array in function
    return getarray[1]    // 1st index of array returned
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 400, 500, 1000]));  // / another way in which first declaring an Array isn't neccessary
