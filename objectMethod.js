
// A function that is a property of an object is called its method.
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
//   In a function definition, this refers to the "owner" of the function.
// JavaScript methods are actions that can be performed on objects.
// A JavaScript method is a property containing a function definition.
// access an object method with the following syntax:    objectName.methodName()
// Initialize an object
const employees = {
    boss: 'Michael',
    secretary: 'Pam',
    sales: 'Jim',
    accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys); 
// ["boss", "secretary", "sales", "accountant"]

// Arrow functions have no “this”
let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Ilya
// Summary
// Functions that are stored in object properties are called “methods”.
// Methods allow objects to “act” like object.doSomething().
// Methods can reference the object as this.
// The value of this is defined at run-time.

// When a function is declared, it may use this, but that this has no value until the function is called.
// A function can be copied between objects.
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
// Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.

// Object.keys can be used to iterate through the keys and values of an object.
// Iterate through the keys
Object.keys(employees).forEach(key => {
    let value = employees[key];

     console.log(`${key}: ${value}`);
});

// output
// boss: Michael
// secretary: Pam
// sales: Jim
// accountant: Oscar

// Object.keys is also useful for checking the length of an object.

// Get the length of the keys
const length = Object.keys(employees).length;

console.log(length);
 
// Output  4

// Helpful Link 
// https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript