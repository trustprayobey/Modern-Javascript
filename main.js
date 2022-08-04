//Modules
//modularity is writting the code in diferrent files
//each file is called a modules


import UserName, { printName as printUserName, printAge } from "./user.js";

const user = new UserName('Bob', 11)

console.log(user)

printUserName(user)
printAge(user)


//let const var
// defined redified reinialized


// var salary = 10000
// salary = 5000
// salary = "cows"
// console.log(salary)


// let wage = 1000
// console.log(wage)
// wage = 500
// console.log(wage)

// console.log(wage)

// const profit = 10000
// profit = 400
// profit = "cows"
// console.log(profit)

// function cows(a) {
//     console.log(`good morning ${a}`)
//     console.log(`good afternoon ${a}`)
//     console.log(`good evening ${a}`)
//     console.log(`How are you doing today ${a}`)

// }

// function combined(x) {
//     cows(x)

// }

// combined(`Brian`)
// // es6  the netninja


// ==============================
// ==============================
// this basics
// this advanced
// factory functions
// constructor functions
// prototype property
// property lookup
// calls
// binds
// =============================
// ==============================