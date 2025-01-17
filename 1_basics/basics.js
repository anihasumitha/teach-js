// // VARIABLES
// let sayName = "John";
// let score;

// score = 8
// score = 9
// console.log(score)
// const PI = 3.14
// console.log(PI)

// DATA TYPES
// let isMango = true;
// let value = null
// Primitives: number, bigint, string, boolean, null, undefined, symbol
// Non primitve: object

// Strings: Letters and words [ January 16, 2025]
/*chars and strings 
strings in js 
escaping values
finding characters 
string length
string arithmetic 
string methods
template literals and interpolation
*/




// INTERACTION
// alert, prompt and confirm
// alert("Hi, I am new to coding")
// let age = prompt("how old are you?")
// alert(`I am ${age} year old`)
// let isMale = confirm("Gender?")

// TYPE CONVERSIONS: String, Boolean, Number
// -> Casting
// let value = true;
// console.log(typeof(value))
// value = String(value);
// console.log("After", typeof(value))

// BASIC OPERATIORS, MATHS: +, *, /, -, Exponentiation (**), Remainder (%)
// increment (++) and decrement (--)
// Bitwise operators: &, |, XOR(^), NOT(~)
// let a = 4;
// // prefix
// console.log(a++)
// console.log("After")
// console.log(a)
// // postfix
// console.log(++a)

// COMPARISONS: >, <, == (converted to numbers), === (strict), !=
// let a, b;
// a = 4; b =6;
// console.log(a > b)

// CONDITIONAL BRANCHING: if, if-else
// conditional operator: let result = condition ? value1 : value2;

// LOGICAL OPERATOR: OR (||), AND (&&), NOT(!)
// short circuit: true || alert("not printed") ;
// since is true the "not printed" will not be executed
// OR: Finds the first truthy value and returns it

// AND: If the first operand is truthy it returns the second operand
// alert(1 && 0) return 0
// If the first operand is falsy it returns it
// alert(0 && "name") returns 0

//////////////////////////////// Assignment /////////////////////////////////
/* Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled” */

// NULLISH COALESCING OPERATOR: ?? [short way to choose the first defined value]
// Use to treat null and undefined similarly.
// A value is defined if it is neither null or undefined
// a ?? b is: if a is defined, then a, else b
// example:
// a ?? b can be written as
// result = (a !== null && a!== undefined) ? a : b
// let height = 0
// console.log(height ?? 100)

// LOOPS (FOR and WHILE, DO...WHILE): Used for repeated actions
// let i = 0;  //i = 4
// while (i < 3) {
//     console.log(i)
//     i++; //i--
// }

// for (begin; condition; step) {
//   loop body}

// for (let i = 0; i < 3; i++) {
//     alert(i);
// }
// break and continue

//////////////////////////////// Assignment /////////////////////////////////
/* 
(1)
Write a loop which prompts for a number greater than 100. If the visitor 
enters another number – ask them to input again.
The loop must ask for a number until either the visitor enters a number 
greater than 100 or cancels the input/enters an empty line

(2)
An integer number greater than 1 is called a prime if it cannot be divided without a remainder 
by anything except 1 and itself. In other words, n > 1 is a prime if it can’t be 
evenly divided by anything except 1 and n.
by 2, 3 and 4. Write the code which outputs prFor example, 5 is a prime, because it cannot be divided without a remainder 
ime numbers in the interval 
from 2 to n.
For n = 10 the result will be 2,3,5,7.
*/

// SWITCH STATEMENT
// switch(x) {
//     case 'value1':  // if (x === 'value1')
//       ...
//       [break]
  
//     case 'value2':  // if (x === 'value2')
//       ...
//       [break]
  
//     default:
//       ...
//       [break]
//   }

// FUNCTIONS
// ***NOTE***: Local and outer variables (SCOPE)
// function showMessage() {
//     alert( 'Hello everyone!' );
//   }

// function name(parameter1, parameter2, ... parameterN) {
//     // body
//    }

// Naming a function: Functions are actions
// Functions should like…
// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc

//////////////////////////////// Assignment /////////////////////////////////
/* 
Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
*/
// #199ED7
