//JavaScript has only one type of number. Numbers can be written with or without decimals.
//JavaScript Numbers are Always 64-bit Floating Point

// let x = 10;
// let y = 20;
// let z = x + y;
// console.log(z);   //Ans 30


// // JavaScript will try to convert strings to numbers in all numeric operations:
// let x = "100";
// let y = "10";
// let z = x / y;
// let z = x * y;
// let z = x - y;
// console.log(z); // this will work:
// let z = x + y;   //But this will not work:


// NaN - Not a Number
// You can use the global JavaScript function isNaN() to find out if a value is a not a number:

let x = 100 / "Apple";
console.log(isNaN(x));    //Ans True

let x = NaN;
let y = 5;
let z = x + y; //the result might be a concatenation like NaN5:

// NaN is a number: typeof NaN returns number:
//Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

// Infinity is a number: typeof Infinity returns number.

// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
// JavaScript Numbers as Objects
// Normally JavaScript numbers are primitive values created from literals:

// Comparing two JavaScript objects always returns false.
