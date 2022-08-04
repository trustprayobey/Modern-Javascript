//var let and const

//also block but for constants(read-only)
//var -> function
//let -> block
// function sayHello() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i) //Es6 'let' is only accessible in the block
//     }
//     // console.log(i) //var is accessible here and in the block
// }
// sayHello() //use c'onst' over 'let' and 'let' only when reasinging throw away var


// var agee = 20

// let person = {
//     'last-name': 20,
//     //     agee,
//     // name: 'Brian',
//     // walk: function () { },
//     // talk() { } //same method es6 way
// }
// console.log(person["last-name"])
// person['name'] //same but es6

// const targetMember = 'name'
// person[targetMember] = 'Ian'
// console.log(person.agee)


//this keyword

// const person = {
//     name: "Mosh",
//     walk() { console.log(this) }
//     // this keyword object,functions declaration side
// }
// person.walk() //this returns reference to the object


// const walk = person.walk
// console.log(walk)
// walk()

// when use this outside of the object it returns a global object which is the window

// const walk = person.walk.bind(person) //sets this to person
// walk()

//functions are objects that have propreties and methods we can use

//Arrow functions
// const square = function (number) {
//     return number * number
// }

// const square = number => number * number //same thing
// console.log(square(5))

// const jobs = [
//     { id: 1, isActive: true },
//     { id: 2, isActive: true },
//     { id: 3, isActive: false }

// ]

// jobs.filter(job => job.isActive)


// const person = {
//     talk() {
//         var self = this
//         // asynchro us javascript
//         setTimeout(() => { //this is stand alone function and will return window object
//             console.log('this', this)//to get person var self
//         }, 1000) //arrow function dont rebind the this keyword instead it inherits
//     }
// }
// person.talk()


//es6 template literals
// const colors = ['red', 'green', 'blue']
// colors.map(color => '<li>' + color + '</li>')
// const items = colors.map(color => `<li>${color}</li>`)
// console.log(items)


//Object Destructuring

// const address = {
//     street: '',
//     city: '',
//     country: ''

// }

// const street = address.street
// const city = address.city   ///destructuring solves this
// const country = address.country

// const { street, city, country } = address
// if we want diferent name eg st
// const { street: st } = address



//Spread operator

// const first = [1, 2, 3]
// const second = [4, 5, 6]

// const combined = first.concat(second) //old way
// const combined = [...first, 'a', ...second, 'b'] // spread ...

// const clone = [...first]
// console.log(clone)

// const first = { name: 'Mosh' }
// const second = { job: 'Instructor' }

// const combined = { ...first, ...second, location: 'Australia' }
// console.log(combined)



//Classes

// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     walk() {
//         console.log("walk")
//     }
// } //use pascal naming convention

// const person = new Person('Brian')


// person.walk()




//Inheritance



// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     walk() {
//         console.log("walk")
//     }
// }

// class Teacher extends Person {
//     constructor(name, degree) {
//         super(name)
//         this.degree = degree
//     }
//     teach() {
//         console.log("teach")
//     }
// }

// const teacher = new Teacher('Brian', 'masters')
// teacher.walk() //Inheritance here in action


//Modules
//modularity is writting the code in diferrent files
//each file is called a module

// //Default Parameters

// window.onload = function () {

//     // function log(num = 10) {
//     //     console.log(num)
//     // }
//     // log()

//     function log(name = 'none', belt = 'gone', age = 'not here') {
//         console.log('My name is ' + name + ' and my belt is ' + belt + ' and my age is ' + age)
//     }
//     log()
// }

// //Spread operator

// window.onload = function () {
//     let meats = ['salami', 'bacon', 'beef']
//     console.log(...meats)
// }


// //Sets es6

// window.onload = function () {
//     var names = new Set() //sets eliminate duplicates
//     names.add('shawn').add('Daisy').add('Crystal').add('Crystal')
//     //we cant put .delete twice
//     names.clear //removes everything in the set

//     //to check we use the .has
//     console.log(names.has('shawn'))

//     console.log(names.delete('shawn'))
//     console.log(names.size)
//     console.log(names)
// }

//Generators

window.onload = function () {
    function* cows() {       /// the * makes this a generator
        console.log('pear')
        yield console.log('banana') //My pause here
        console.log('apple')
    }
    let myGen = cows()
    myGen.next() //This here is my play button
    myGen.next()//fisrt it workd then pause then this plays
}