// Two types of memories

// Stack (Primitive), Heap (Non-Primitive)

let name1 = "Bhavay";
let name2 = name1
name2 = "chaiaurcode"

console.log(name1);  // Since name2 got a copy, changing name2 does not affect name1.
console.log(name2);

let obj1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let obj2 = obj1
obj2.email = "bhavay@gmail.com"

console.log(obj1.email);  // Since obj2 is just a reference, changing obj2 also changes obj1.
console.log(obj2.email);



// In stack memory If we assign a new variable, a copy is made.
// In heap memory the variable holds only a reference (address) to the heap.
// Variables (names like x, obj, arr) are always stored in stack memory.
// Primitive values are stored inside the stack.
// Non-primitive values are stored in heap memory, but their references remain in stack memory.