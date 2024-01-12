// 10)- Immediately Invoked Functions(IIFY)

// (function(){
//     console.log("hello this is Immediately invoked functions")
// })();

// 11)- What is mean by first-class citizens in Javascript?

// assigning in a variables.
// const print = function(){
//     console.log("hello, This is Nikhil")
// }

// // passing as an arguments.

// function higherOrderFunctions(callback){
//     callback()
// }
// higherOrderFunctions(print)

//// Define a function that returns another function
// function returnFunction(){
//     return function(){
//         console.log("Function that return another function")
//     }
// }

// const returnedFunction = returnFunction()
// returnedFunction()
 
// Function can be stored in the data structures like arrays and objects.

// const functionArray = [
//     function(){
//         console.log("function in a Array")

//     }
// ]

// const functionObjects = {
//     func1: function() {
//        console.log("func1 in object")
//     },
//     func2: function() {
//         console.log("func2 in object")
//     }
// };

// 5. function can have dynamic properties 

// function print(){
//     console.log("Nikhil")
// }

// print.greet = "GOOD EVENING"

// console.log(print.greet)

// what are the types of functions in javascript
// 1st :- Function declarations
// function myName(){
//     console.log("Nikhil Anand")
// }
// myName();

// 2. Function expression

// let nikhil = function(){
//     return console.log("College-DropOut")
// }
// nikhil()
// 3. Arrow function

// let addTwoNum = (a ,b) => a +b ;
// console.log(addTwoNum(8 , 8))

let multipleBy2 = num => num*2 ;
console.log(multipleBy2(9))








