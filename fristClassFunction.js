// Frist Class Function
function add(a, b){
    return a + b 
}
// 1. A Function can be stored in a Variable.
var sum = add
console.log(sum(10, 5));
// 2. A Function can be stored in an Array.
var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0] (65, 65));
// 3. A Function can be storied in an Object.
var obj = {
    sum : add
}
console.log(obj);
console.log(obj.sum(54, 54));
// 4. We can create Function as Neeed.
setTimeout(function (){
    console.log(' hi');
}, 100)
// 5. We can pass Function as an Agruments.
// 6. We can return Function from another Funtion.