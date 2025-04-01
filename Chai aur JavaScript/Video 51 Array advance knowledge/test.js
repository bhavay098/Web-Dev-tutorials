const myArr = []
// % DebugPrint(myArr)

// There are 2 types of arrays in JS
// continuous Array (Packed array), Holey Array

// SMI (small integer)  // default
// packed element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]   // best type of array and optimized and it can only contain numbers and not even decimals
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS (once converted in packed_double, it can't go back to packed_smi)

arrTwo.push('7')
// PACKED_ELEMENTS (once downgraded, can't upgrade anymore)

arrTwo[10] = 11
//HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check (first check)  
// hasOwnProperty(arrTwo, 9) (second check)
// hasOwnProperty(arrTwo.prototype, 9) (third check)
// hasOwnProperty(Object.prototype, 9) (fourth check)

// holes are very expensive in js

// SMI > DOUBLE > PACKED         // optimization
// H_SMI > H_DOUBLE > H_PACKED    

const arrFour = new Array(3)     // wrong approach in case of optimization
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1'   // downgraded to HOLEY_ELEMENTS
arrFour[1] = '2'
arrFour[2] = '3'

const arrFive = []   // better approach in case of optimization
arrFive.push('1')  // PACKED_ELEMENTS
arrFive.push('2')  // PACKED_ELEMENTS
arrFive.push('3')  // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5, 6]
arrSix.push(Infinity)  // converted to Double