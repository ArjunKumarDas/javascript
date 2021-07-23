// In JavaScript, undefined means a variable has been declared but has not yet been assigned a value, such as:

var testVar;
alert(testVar); //shows undefined
alert(typeof testVar); //shows undefined
var a;
console.log(a);
// undefined


// null is an assignment value. It can be assigned to a variable as a representation of no value:
var testVar = null;
alert(testVar); //shows null
alert(typeof testVar); //shows object

var b = null;
console.log(b);
// null

// From the preceding examples, it is clear that undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.



null === undefined // false
null == undefined // true
null === null // true

null = 'value' // ReferenceError
undefined = 'value' // 'value'

var a;
console.log(typeof(a));
// undefined

var b = null;
console.log(typeof(b));
// object

console.log(null !== undefined);
// true

console.log(null == undefined);
// true

function f(a = true) { console.log(a) }
f(undefined); // true
f(null); // null

// Similarities between null and undefined
// In JavaScript there are only six falsy values. Both null and undefined are two of the six falsy values. Here’s a full list:
// false
// 0 (zero)
// “” (empty string)
// null
// undefined
// NaN (Not A Number)
// Any other value in JavaScript is considered truthy.


// Also in JavaScript, there are six primitive values. Both null and undefined are primitive values. Here is a full list:
// Boolean
// Null
// Undefined
// Number
// String
// Symbol
// All other values in JavaScript are objects (objects, functions, arrays, etc.).