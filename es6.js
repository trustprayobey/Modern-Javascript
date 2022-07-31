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

const person = {
    name: "Mosh",
    walk() { console.log(this) }
}
person.walk() //this returns reference to the object


const walk = person.walk
console.log(walk)
// we can not call walk
//when use this outside of the object it returns a global object which is the window