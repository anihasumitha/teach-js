// Loop:  Loop is a piece of code that will continue to run until a 
// certain condition is met

// Infinite loops
let n = 4;
// let flag = true;
// while (flag) {
//     console.log(n);
//     n = n - 1;
//     if (n == 0) {
//         flag = false;
//     };
// };

// while (n != 0) {
//     console.log(n)
//     n -= 1
// }

// While loops
// while (some condition is true) {
//     do something
//     }

// do-while loops
// do {
//     // do something
//     } while(condition)
// do {
//     console.log(n)
//     n -= 1
// } while (n != 0)

// for loops
// for (initialization ; condition ; update) {
//     // do something
//     }
// for (n=4; n > 0; n--) {
//     console.log(n)
// }

// nested loops
let a = [1,3,5,7,8]
let b = [0,1,2,3,4]

for (let i=0; i < a.length; i++){
    let results = a[i] * b[i]
    console.log(results)
}

// outer loop
for(let i=1 ; i<5 ; i++){ // 1,2,3,4
    // inner loop
    for(let j=1 ; j<5 ; j++){  // 1,2,3,4
    console.log(`${j} multiplied by ${i} is ${i*j}`);
    }
    }
// 