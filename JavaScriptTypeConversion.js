// Converting Strings to Numbers
// The global method Number() can convert strings to numbers.
// Strings containing numbers (like "3.14") convert to numbers (like 3.14).
// Empty strings convert to 0.
// Anything else converts to NaN (Not a Number).


Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN


// The unary + operator can be used to convert a variable to a number:
let y = "5";      // y is a string
let x = + y;      // x is a number

// Converting Numbers to Strings
String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression

// The Number method toString() does the same.
x.toString()
(123).toString()
(100 + 23).toString()


// Automatic Type Conversion
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

