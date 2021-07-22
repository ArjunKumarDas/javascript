// The call, apply and bind methods are NOT suitable for Arrow functions -- as they were designed to allow methods to execute within different scopes -- because Arrow functions establish "this" based on the scope the Arrow function is defined within.

// For example call, apply and bind work as expected with Traditional functions, because we establish the scope for each of the methods:
// Arrow functions do not have their own arguments object. Thus, in this example, arguments is a reference to the arguments of the enclosing scope:

// Advanced syntax
// To return an object literal expression requires parentheses around expression
// Rest parameters are supported:
// Default parameters are supported:
// Destructuring within params supported:

function doubleIt(num){
    return num * 2;
}

const res = doubleIt(10);
console.log(res);

const doubleIt2 = num => num * 2;
const add = (x, y) => x + y;
const diff = () => 5;
const another = (x, y) => {
    const sum = x + y;
    const minus = x - y;
    const multi = sum * minus;
    return multi;
}

console.log("DoubleIt", doubleIt(11));
console.log("Add", add(11, 11));
console.log("diff", diff(11));
console.log("another", another(20, 10));