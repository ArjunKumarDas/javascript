const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        // console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary:25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary:25000
}

normalPerson.chargeBill();

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);


const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);

normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40])
console.log(heroPerson.salary);



// Apply vs. Call vs. Bind Examples


// Call
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); // Hello Jon Kuperman
say.call(person2, 'Hello'); // Hello Kelly King

// Apply
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); // Hello Jon Kuperman
say.apply(person2, ['Hello']); // Hello Kelly King


// Bind
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King
// Call and apply are pretty interchangeable. Just decide whether it’s easier to send in an array or a comma separated list of arguments.
// I always remember which one is which by remembering that Call is for comma (separated list) and Apply is for Array.
// Bind is a bit different. It returns a new function. Call and Apply execute the current function immediately.

// bind: It binds the function with provided value and context but it does not executes the function. To execute function you need to call the function.
// call: It executes the function with provided context and parameter.
// apply: It executes the function with provided context and parameter as arra

// Call invokes the function immediately and allows you to pass in arguments one by one
// Apply invokes the function immediately and allows you to pass in arguments as an array.
// Bind returns a new function, and you can invoke/call it anytime you want by invoking a function.

// CALL

// the first argument e.g name inside call method is always a reference to (this) variable and latter will be function variable

let name =  {
    firstname : "Arham",
    lastname : "Chowdhury",
}
printFullName =  function(hometown,company){
    console.log(this.firstname + " " + this.lastname +", " + hometown + ", " + company)
}
printFullName.call(name,"Mumbai","Taufa");     //Arham Chowdhury, Mumbai, Taufa
// APPLY

// apply method is same as the call method the only diff is that, the function arguments are passed in Array list

printFullName.apply(name, ["Mumbai","Taufa"]);     //Arham Chowdhury, Mumbai, Taufa
// BIND

// bind method is same as call except that ,the bind returns a function that can be used later by invoking it (does'nt call it immediately)

let printMyNAme = printFullName.bind(name,"Mumbai","Taufa");

printMyNAme();      //Arham Chowdhury, Mumbai, Taufa


// https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb
// https://www.codingame.com/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript