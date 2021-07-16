var a = 10;
var b = 20;
var temp = a;
a = b ;
b = temp;
console.log(a, b);  // a= 20 and b=10 ans


var x = 10;
var y = 20;
x = x + y;   // 10 +20 =30
y = x - y // 30 - 10 = 20
x = x- y // 30 - 20 = 10 

console.log(x,y); // x= 20 and y=10 ans


// Destructing way 
var p = 10;
var q = 20;

[p, q] = [q, p];

console.log(p, q);


