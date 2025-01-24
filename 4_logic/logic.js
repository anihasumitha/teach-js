// Booleans (Primitive data types)
// let welcome = Boolean("Hello");
// console.log(welcome)

// Falsy values in Js
// "",'', ``, 0, -0, NaN, false, null, undefined

// Logical operators
// Negation (Logical Not)
// console.log(!true); // false
// console.log(!!""); // false
// console.log(!!"hello"); // true

// Logical AND
// a && b: returns b if a and b are true
// a && b: returns <first false value: a or b> if a or b is false
// console.log("hello" && 42);
// console.log("" && 42);
// console.log(true && false);
// console.log(true && "" && 0);

//Logical OR
// a || b: returns true if any of the values are truthy 
// -> then returns the first truth value of any of them
// or 
// returns false if all the values are false
// -> then returns the last falsy value 

// console.log("hello" || "Aniha"); //hello
// console.log(false || 0); // 
// console.log("Jerry" || "is" || "single" || 0); // Jerry
// console.log(NaN || null) // null
// console.log(null || undefined) // undefined

// comparison
// == (Soft Equality) checks if two vlaues are equal to each other
// let score = 42;
// console.log(score == 42) // true
// console.log(score == "42") // coerce the values to the same type
// // Js doesn't take into account of the data type
// console.log("" == 0)

// // === (Hard Equality)
// console.log(score === "42")// false data types are checked

// Inequality (!=)
// console.log( 4 != 4) // false

// // Greater than and less than
// console.log( 8 > 4 || 8 < 4); // true
// console.log("bananas" > "apples") // true
// // =>, =<

// flow control

// if-else statements
// let score = 80;
// if (score >= 90) {
//     console.log("I passed!")
// }

// if (score === 45) {
//     console.log("Retake exams")
// }

// if (score >= 90) {
//     console.log("A+")
// } else if (score >= 80) {
//     console.log("B")
// } else {
//     console.log("Take exams again!")
// }

// fizzBuzz

// Ternary operator
// condition ? run if true: run it false
// score >= 90 ? console.log("Passed"): console.log("Failed");

// switch statements

// MDN 
// switch (expression) {
//     case caseExpression1:
//       statements
//     case caseExpression2:
//       statements
//     // …
//     case caseExpressionN:
//       statements
//     default:
//       statements
//   }
  
// let score = 95;
// switch (true) {
//     case score >= 90:
//         console.log("a")
//         console.log("Passed")
//         break;
//     case score === 80:
//         console.log("B-")
//         break;
//     default:
//         console.log("Retake the exams")
// }

// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// a favourite animal quiz

// switch statements

// a rock paper scissors game