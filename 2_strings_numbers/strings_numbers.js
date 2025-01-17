// // // VARIABLES
// // let sayName = "John";
// // let score;

// // score = 8
// // score = 9
// // console.log(score)
// // const PI = 3.14
// // console.log(PI)

// // DATA TYPES
// // let isMango = true;
// // let value = null
// // Primitives: number, bigint, string, boolean, null, undefined, symbol
// // Non primitve: object

// // Strings: Letters and words [ January 16, 2025]
// //chars and strings 
// //strings in js 
// let name = 'Aniha'

// //escaping values
// // \n -> new line
// // \t -> tab
// let location = '\"I\'m home\"'
// console.log(location)

// //finding characters 
// // charAt(number): function
// console.log(name.charAt(0))
// console.log(name[0])
// console.log(name.indexOf("h"))

// console.log(name.includes("e"))
// console.log(name.startsWith("A"))
// console.log(name.endsWith("a"))

// //string length
// console.log(name.length)

// //string arithmetic 
// console.log("Hello" + " Aniha")
// console.log("Hello" + " " +  "Aniha")
// console.log("Hello".concat(" Aniha"))

// //string methods
// console.log(name.toLowerCase())
// console.log(name.toUpperCase())

// let address = "         Randoff XYZ            "
// console.log(address.trim())
// console.log(address.trimStart())
// console.log(address.trimEnd())


// //template literals and interpolation
// console.log(`I live at ${address.trim()}`)


// Numbers
// Integers and floats
let age = 45;
console.log(age);
console.log(typeof(age));
let radius = 7.5;

// Exponential notations
const a = 1e-6;
console.log(a)

// console.log(typeof(NaN))

// Arithmetic operations
// console.log(4 + 5) // addition
// console.log(6 * 11) // mulitiplication
// console.log(3**4)  // power of
// console.log(14 % 3) // Modulo/ Remainder

// Varying variables
let count = 1;
count = count + 1
count += 1
console.log(count)

// Increments
let num = 4
console.log(num++) // 4 -> 5
console.log(++num) // 6

// Decrements
console.log(num--) // 5 -> 5
console.log(--num) // 4

// Casting (Converting numbers and strings)
// String -> Number
console.log(Number("2"))

// Number -> String
console.log(String(3))
// console.log(typeof(String(3)))

// Random numbers
console.log("random number:", Math.random())

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer