const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)  // 2nd array will be inserted at the end of 1st array. modifies the original array

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);  // returns the 0th element of 2nd array

// const allHeroes = marvel_heroes.concat(dc_heroes)  // combines two or more arrays and returns a new array. it doesn't modify the original array
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]  // spread operator - same as concat and more preferable to use
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// used to flatten nested arrays into a single-level array. It creates a new array without modifying the original one. Depth – Specifies how deep the nested array should be flattened. Default is 1. Using Infinity ensures all nested levels are flattened.
console.log(real_another_array);


console.log(Array.isArray("Bhavay"));  // Checks whether a given value is an array or not.
console.log(Array.from("Bhavay"));  // Converts given value into Array. doesn't change the original value
console.log(Array.from({name: "Bhavay"}));  // Cannot directly convert objects into Arrays - IMP for interview

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  // Returns a new Array from a set of elements

