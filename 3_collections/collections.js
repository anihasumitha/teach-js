// Arrays are ordered list of values
let arr = [] // Empty array

// Creating arrays
const arrNumbers = [2,4,3,1];
let fruits = ["apples", "mangoes", "oranges"];
let boolElements = [true, false, true];

let firstFruit = fruits[0]  // "apples"
// console.log(firstFruit)
// console.log(fruits[4]) // Undefined

// Adding values to arrrays
fruits[3] = "kiwi";
fruits[0] = "banana"; 
// console.log(fruits)

// Removing values from arrays
// delete fruits[2]
// console.log(fruits)

// Finding the length of an array
// console.log(fruits.length)
// fruits.length = 2
// console.log(fruits)

// pop and push
// console.log("original array:", fruits)
// console.log(fruits.pop())
// console.log("After pop:", fruits)
// console.log(fruits.push("strawberry"))
// console.log("After push:", fruits)


// shift and unshift
// console.log("original array:", fruits)
// console.log(fruits.shift())
// console.log("After shift:", fruits)
// console.log(fruits.unshift("strawberry"))
// console.log("After unshift:", fruits)

// the spread operator [copy]
// console.log(fruits)
// let fruitsNumbersCopy = [...fruits, ...arrNumbers]
// let complexArray = [...fruits, ...arrNumbers, fruits]
// console.log(complexArray)

// slice and splice
// console.log(fruits)
// fruits.slice(1,3)
// console.log(fruits)

// Indexof, includes, join, sort, reverse
// console.log(fruits)
// console.log(fruits.indexOf("mangoes")) // 1
// console.log(fruits.includes("kiwi")) // boolean
// console.log(fruits.join("*"))
// console.log(fruits.reverse())
// console.log(fruits.sort())
// console.log(arrNumbers.sort())

// Multi-Dimenional arrays 
const coordinates = [
    [1,2],
    [2,4]
]

console.log(coordinates)
console.log(coordinates[1])
console.log(coordinates[1][1]) //4