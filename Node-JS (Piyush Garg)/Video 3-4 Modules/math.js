// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// module.exports = {
//     add,
//     sub
// }
// module.exports is used to export functions, objects, or values from a file (called a module) so they can be used in another file via require().


exports.add = (a, b) => a + b;  // another way of exporting (same as module.exports). Don't use both ways in the same file cuz it may behave unexpectedly
exports.sub = (a, b) => a - b;