const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 // square with for loop
const output = []
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output); 
// [
//     1,  4,  9, 16,  25,
//    36, 49, 64, 81, 100
//  ]

 // square with function
function square (element){      
    return element * element;
}

// square with array function
const square = element => element * element;   
const square = x => x * x;

 // square with map
//  The map() method passes each element of the array on which it is invoked to the function you specify,
//  and returns an array containing the values returned by that function.
const result = numbers.map(function(element){
    return element * element;
})

const result = numbers.map(x => x * x );

// filter :    filter reaturn a array
// The method returns an array containing a subset of the elements of the array on which it is invoked. 
// The function you pass to it should be predicate: a function that returns true or false. The predicate is invoked just as for forEach() and map(). 
// If the return value is true , or a value that converts to true, then the element passed to the predicate is a member of the subset and is added to the array 
// that will become the return value

const biggerNumbers = numbers.filter( x => x > 5);

// Find : find reaturn only value

const isThere = numbers.find( x => x > 5 );
// console.log(isThere);

// ES6 ships with several array methods that enable one to perform operations such as:

// Filtering values (filter)
// Summing up array elements (reduce)
// Performing the same operation on each element (map)


const users = [
    {
      name: "Alice",
      age: 19,
      id: 1
    },
    {
      name: "Bob",
      age: 24,
      id: 2
    },
  ]
  
  let user = users.filter((user) => user.id === 2);
  console.log(user);
//or
user = users.filter((user) => user.id === 2)[0];
console.log(user);

user = users.filter((user) => user.id === 2)[0];
console.log(user);
// which then returns {name: "Bob", age: 24, id: 2}


const user = users.find((user) => user.id === 2)
// returns {name: "Bob", age: 24, id: 2}

// find returns the first matching element and filter returns an array of all matching elements
