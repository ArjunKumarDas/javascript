// function paremeter
function doubleIt(number){
    var result = number * 2
    console.log(result);
}

doubleIt(50);
doubleIt(100);
doubleIt(500);

// function paremeter and return

function doubleIt(number){
    var result = number * 2;
    return result;

}
 
// call multi paarameter
var fristNumber = doubleIt(20);
var secondNumber = doubleIt(20);
var total = fristNumber + secondNumber;
console.log(total);
console.log(fristNumber, secondNumber);


// use multi Paremeter
function add(number1, number2){
    var result = number1 + number2;
    return result;
}

var sum = add(100, 100);
console.log(sum);