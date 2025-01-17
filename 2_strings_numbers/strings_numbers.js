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
//chars and strings 
//strings in js 
let name = 'Aniha'

//escaping values
// \n -> new line
// \t -> tab
let location = '\"I\'m home\"'
console.log(location)

//finding characters 
// charAt(number): function
console.log(name.charAt(0))
console.log(name[0])
console.log(name.indexOf("h"))

console.log(name.includes("e"))
console.log(name.startsWith("A"))
console.log(name.endsWith("a"))

//string length
console.log(name.length)

//string arithmetic 
console.log("Hello" + " Aniha")
console.log("Hello" + " " +  "Aniha")
console.log("Hello".concat(" Aniha"))

//string methods
console.log(name.toLowerCase())
console.log(name.toUpperCase())

let address = "         Randoff XYZ            "
console.log(address.trim())
console.log(address.trimStart())
console.log(address.trimEnd())


//template literals and interpolation
console.log(`I live at ${address.trim()}`)

