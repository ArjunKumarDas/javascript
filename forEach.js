// The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.