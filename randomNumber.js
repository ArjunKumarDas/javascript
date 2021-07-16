var num = 5.5484;
var num2 = 5.4555;
var res1 = Math.floor(num); // Ans 5
var res2 = Math.ceil(num); // Ans 6
var res1 = Math.round(num); // Ans 6
var res1 = Math.round(num2); // Ans 5

for ( var i= 0; i < 10; i++) {
    var dice = Math.random();
    var resultDice = dice * 6;
    var finalResult = Math.ceil(resultDice);
    console.log(finalResult);  // random output 10 time
}
