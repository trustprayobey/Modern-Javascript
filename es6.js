//var let and const

//also block but for constants(read-only)
//var -> function
//let -> block
// function sayHello() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i) //Es6 'let' is only accessible in the block
//     }
//     console.log(i) //var is accessible here and in the block
// }
// sayHello() //use c'onst' over 'let' and 'let' only when reasinging throw away var


//objects
// const person = {
//     name: 'Brian',
//     walk: function () { },
//     talk() { } //same method es6 way
// }
// person.walk()
// person['name'] //same but es6

// const targetMember = 'name'
// person[targetMember] = 'Ian'


//this keyword

// const person = {
//     name: "Mosh",
//     walk() { console.log(this) }
// }
// person.walk() //this returns reference to the object


// const walk = person.walk
// console.log(walk)
// walk()

//when use this outside of the object it returns a global object which is the window

// const walk = person.walk.bind(person) //sets this to person
// walk()

//functions are objects that have propreties and methods we can use

//Arrow functions
// const square = function (number) {
//     return number * number
// }

// const square = number => number * number //same thing
// console.log(square(5))

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }

]

jobs.filter(job => job.isActive)