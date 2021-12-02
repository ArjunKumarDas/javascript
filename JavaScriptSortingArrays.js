// The sort() method sorts an array alphabetically:
// The reverse() method reverses the elements in an array.
const points = [40, 100, 1, 5, 25, 10];
const res1 = points.sort(function(a, b){return a - b});
console.log(res1); // 1,5,10,25,40,100 Sort the array in ascending order:

const points = [40, 100, 1, 5, 25, 10];
 const res2 = points.sort(function(a, b){return b - a});
 console.log(res2); //  Sort the array in descending order:

 const points = [40, 100, 1, 5, 25, 10];
 const res3 = points.sort(function(a, b){return 0.5 - Math.random()});
 console.log(res3); //Sorting an Array in Random Order

//  You can use Math.max.apply to find the highest number in an array:
// You can use Math.min.apply to find the lowest number in an array: