let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);  // exponentiation (2 raise to the power 3)
// console.log(2 / 3);
// console.log(2 % 3);  // modulus (gives remainder after dividing)

let str1 = "hello"
let str2 = " Bhavay"
let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);  
// console.log(1 + 2 + "2");
// console.log((3 + 4) * 5 % 3);

// console.log(+true);  // +true converts true to 1 (because true is treated as 1 in numeric contexts).
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2  // avoid these kinda tricky codes. write simple readable code

let gameCounter = 100;
++gameCounter;  // prefix and postfix
console.log(gameCounter);

// Link to study:
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


// Operator	               Example	      Explanation	                        Output

// + (Addition)	           "1" + 2        String + Number → String	            "12"
// - (Subtraction)	       "10" - 5       String converted to Number	        5
// * (Multiplication)	   "5" * 2        String converted to Number	        10
// / (Division)            "20" / "4"     Both strings converted to Numbers	    5
// == (Loose Equality)	   5 == "5"       String converted to Number	        true