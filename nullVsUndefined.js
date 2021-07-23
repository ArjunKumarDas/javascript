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