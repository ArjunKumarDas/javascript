//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function explain_callback(name, age, task){
    task();
    console.log('Hello ', name);
    console.log('your age ', age);
}

function washHand(){
    console.log('wash hand with soap')
}
function takeShower(){
    console.log('Take shower');
}
function scrollFacebook(){
    console.log('Scroll facebook but dont like any post');
}

explain_callback('Sogir Uddin', 17, washHand);
explain_callback('Jogir Uddin', 13, takeShower);
explain_callback('mugir Uddin', 21, scrollFacebook);



// another example of Callback Function
function sample(a, b , cb){
    var c = a + b
    var d = a - b
    var result = cb(c, d) 
    return result
}
function sum(a, b){
    return a + b
}
var result = sample(5, 8, sum)
console.log(result);

var result2 = sample(5, 8 function(c, d){
    return c- d
})
console.log(result2);

var reesult3 = sample(5, 8, function(c, d){
    return c * d
})
console.log(result3);