// .reduce() method reduces an array to a single value by applying a function on each element from left to right.
// accumulator: Stores the result of the previous iteration.
// currentValue: The current element being processed.
// initialValue: The starting value

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`acc: ${accumulator} and currval: ${currentValue}`);
//     return accumulator + currentValue
// }, 0)   // accumulator will take 0 in starting

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);