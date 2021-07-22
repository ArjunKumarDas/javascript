// Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
//  arr1 is now [3, 4, 5, 0, 1, 2]

const maxN = [6, 4, 54, 54]
const res = Math.max(...maxN);
console.log(res);