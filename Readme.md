# Javascript Interview Questions
***
### 10)- What is Immediately Invoked Functions.?
--> An Immediately invoked fucntion  (also known as IIFE and pronounced as IIFY) , is a function that runs as soon as it defined . To understand the concept of IIFE, it is crucial to recognize the two sets of parentheses ()() involved: the first set for defining the function, and the second set for immediate execution."

```Javscript
(function(){
    console.log("hello this is Immediately invoked functions")
})();
```
---
### 11)-What is the concept of first-class citizens in JavaScript, and how does it manifest in the treatment of functions within the language?
--> In javascript , functions are considered first-class citizens,which mean they are treated as values and can be used as the same way as other data types like strings, numbers , objects etc.

1. Assignings to variables
--> You can assign a function to a variable, just like other value.
```Javascript
const print = function(){
    console.log("hello, This is Nikhil")
}
```
2.Passing as arguments
--> You can pass a function as an arguments to other functions.
```Javascript

function higherOrderFunctions(callback){
    callback()
}
higherOrderFunctions(print)

```
3. Returning from functions.
--> Function can be returned from the other functions.
```Javascript
function returnFunction(){
    return function(){
        console.log("Function that return another function")
    }
}

const returnedFunction = returnFunction()
returnedFunction()
```

4. Storing in data structures.
--> Function can be stored in the data structures like arrays and objects.
```Javascript
const functionArray = [
    function(){
        console.log("function in a Array")

    }
]

const functionObjects = {
    func1: function() {
       console.log("func1 in object")
    },
    func2: function() {
        console.log("func2 in object")
    }
};
```
5. Function Dynamic Properties
--> Functions in javascript can have dynamic properties and methods.
```Javascript
function print(){
    console.log("Nikhil")
}
print.greet = "GOOD EVENING"

console.log(print.greet)
```
---
### 13)- What are different types of functions.?
--> In Javascript , there are several types of function based on how they are defined and used , here are the main types:-

1. Function Declarations
     - Defined using function keyword.
     - Can be called before the declarations.
```Javascript
function myName(){
    console.log("Nikhil Anand")
}
myName();
```
2.Function expression 
      - Assigned to variable or a property.
      - the function is not hoisted.
```Javascript
let nikhil = function(){
    return console.log("College-DropOut")
}
nikhil()
```
3.Arrow Function
- Arrow function were introduced in ES6 version of javascript. They provides us with a new and shorter syntax of declaring functions. 
- Arrow function can only be used as a function expression.
- Arrow function are declared without function keyword.

```Javascript
let addTwoNum = (a ,b) => a +b ;
    console.log(addTwoNum(8 , 8))
```
- If the functions takes only one arguments , then the parenthesis () around the parameters can be omitted as shown below.

```Javascropt
let multipleBy2 = num => num*2 ;
    console.log(multipleBy2(9))
```
- 








### 13)- Explain Higher-order functions in javascript.?
--> Functions that operates on other functions, either taking as arguments or by returning them , are called higher-order functions. 
- The first-class nature of functions in javascript faciliates the creations of higher-order functions.
```Javascript
1. Map 
--> The `Map` function applies 
```




>Keep Smiling and work harder

