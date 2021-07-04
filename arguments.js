var arr1 = [1, 2, 654, 897]
var arr2 = [54, 54, 546]

// var sum1 = 0
// for (var i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i];
   
// }
// console.log(sum1)

// var sum2 = 0;
// for (let i = 0; i < arr2.length; i++) {
//      sum2 += arr2[i];
// }
// console.log(sum2);

function sumOfArray(arr){
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
       
    }
    console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)

// function addNumbers(num1, num2){
//     var sum = 0;
//     console.log('double', double);
//     for (let i = 0; i < arguments.length; i++) {
//         const num = arguments[i];
//         sum = sum + num;
//     }

//     function logInfo(message){
//         console.log(message);
//     }
//     logInfo('Good morning');

//     var double = sum * 2;

//     return double;
// }

// var result = addNumbers(8, 15);
// console.log(result);