console.log(0 == false) //true
console.log(0 === false) //false
// same value, different type.
// This is an interesting case. The value of 0 when checked with false is same. It is so because 0 and false have the same value for JavaScript, but when checked for type and value, the value is false because 0 is a number and false is boolean.

const str = ""
console.log(str == false) //true
console.log(str === false) //false
// The value of empty string and false is same in JavaScript. Hence, == returns true. However, the type is different and hence === returns false.

// Strict equality using ===
var num = 0;
var obj = new String('0');
var str = '0';

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false


// Loose equality using ==
const num = 0;
const big = 0n;
const str = '0';
const obj = new String('0');

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true

// The “==” operator is known as loose, abstract, or type converting equality operator and it automatically converts one type to another if two variables are not of the same type. Comparing the two values only after converting them into the same type is called type coercion. On the other hand, the “===” operator is known as a strict equality operator and it compares two values but it does not do the type conversion.