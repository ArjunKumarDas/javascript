function stopWatch(){
    let count = 0;
    return function(){
        count++
        return count;
    }
}

const clock1 = stopWatch();
const clock2 = stopWatch();
console.log("clock one", clock1());
console.log("clock two", clock2());
console.log("clock one", clock1());
console.log("clock two", clock2());
console.log("clock one", clock1());
console.log("clock two", clock2());
console.log("clock one", clock1());
console.log("clock two", clock2());

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// Closure Scope Chain
// Every closure has three scopes:
// it has access to its own scope — variables defined between its curly brackets
// it has access to the outer function’s variables
// it has access to the global variables


//  Helpful Link to Know  about Closure in JavaScript.
// https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4