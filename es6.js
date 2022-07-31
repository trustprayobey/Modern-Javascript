//var let and const

//also block but for constants(read-only)
//var -> function
//let -> block
function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i) //Es6 'let' is only accessible in the block
    }
    console.log(i) //var is accessible here and in the block
}
sayHello() //use c'onst' over 'let' and 'let' only when reasinging throw away var