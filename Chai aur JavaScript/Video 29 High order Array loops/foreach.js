// The forEach() method is used to iterate over elements in an array or other iterable objects (like Map and Set). It executes a provided function once for each element in the array.

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (val) {     // val -> The current element of the array.
//     console.log(val);                // normal callback function
// } )

// coding.forEach( (item) => {     // callback arrow function
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, array) => {   // item -> The current element of the array.
//     console.log(item, index, array);       // index (optional) -> The index of the current element.
// })                                         // array (optional) -> The original array being iterated.

let myCoding = [           // multiple objects in Array
    {
        langName: "javascript",
        langFileName: "js",
        langrate: 3
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item);          // accesing the object inside array
    console.log(item.langName);   // accessing the property inside object inside an Array
})