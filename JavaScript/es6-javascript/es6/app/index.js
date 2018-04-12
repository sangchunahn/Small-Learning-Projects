// let replaces var and a more strict version of let is const
// const makes it so that you won't get an error if you declare that var let as something else

// Block Scoping

// Template Literals
// string with embedded expressions
// ex. `hello ${something}`

const limit = 100;
// const prevents it from being changed
// limit = 200;
console.log(limit)

//spread operator in es6
// let a  = [20, 30, 40]
// let b = [10, ...a, 50]

let arrow = () => {
  console.log('arrow function in es06')
}

// map and filter are parts of es6
// "string".repeat(n) repeats the string a number of times 
// startsWith or EndsWith returns a boolean to see if the string starts with or ends with an input
// includes is a better method
// Number.isFinite(argument) sees if the number is finite or infinite not es6
// Number.isSafeInteger to see if its a safe number

// modules are reusable pieces of code 

// you can create functions or variables and import them in the main file.
// you can export functions by wrapping it with export

// Classes in JavaScript construct structures of data based off of the state and behavior of real world objects and introduce a system of inheritance.
// classes in javascripts allows us to create classes
// extends is a child class pointing to an extends parents

// The constructor keyword initializes an object for a class.
// constructor is props from react it is what is passed into it like a function.
// you can call the class as new Class(argument
// super() calls the parent constructor

// static methods we can access the class without declaring an instance of the class. so you don't have to put new Obj()
//Static method calls are made directly on the class and are not callable on instances of the class. Static methods are often used to create utility functions.

// A prototype is a characteristic in every JavaScript object that reveals its parent and the properties that it inherits.
// every object in javascript has a proptype. prototype reveal an object's parent
// function Wizard() {} is a prototype
// let harry = new Wizard("item") is a prototype

// this creates a set
let a = new Set();
// this adds a a
// a.add(argument) puts the argument insdie of the set
// a.has() see if it exists in the set
// if you assign new set(toArray) it shoots it and puts it in an object
// you can do .values() to get the values of set

// Maps are identical to objects
let a = new Map()
let key_1 = "string key";
// first is the key and second is the value
a.set(key_1, 'return value for string key')
// has a key and a value
// you can set a key inside of Map
// string and objects and function keys can be put in
// you can do a.entries to get the entries in a Map
// you can do a.has to return bool if it s there
// get gets the value of the arugment and returns the value

// Data Structures in computer science refer to the programming storage of data for efficient usage in applications and algorithms.
// A Set compares to a more advanced array that has all unique elements and no duplicate values.
// Set iteration frequently occurs through the values() helper method.
// A Map represents a more advanced object in es6 with key-value pairs that can have non-string keys.
// Map iterate frequently occurs through the entries() helper method.

// closures we can't access the variable inside of the function. so we can create a another function to reveal the variable inside of secret. we can invoke the closure function or we can return it
// closure retain a referrence of the lexical scope that it was accessed in.
// closures can create function factories

const addSuffix = (x) => {
  const concat = (y) => {
    return y + x;
  }
}

// let in the loop can re-binds it to each iteration of the loop, making sure to re-assign it the value from the end of the previous loop iteration, so it can be used to avoid issue with closures.
// lexical scoping idea that programs keep track of variable locations to understand where to access them
//Closures in JavaScript and ES6 refer to functions that remember their creation environment and can further reference that environment’s independent variables.
// Function factories create functions based on returning inner functions that manipulate its own arguments and the arguments of the outer function.
// Data encapsulation and private methods don’t exist natively in JavaScript but can be emulated with closures for data restriction and limited access.

// generator buts a asterisk after function
// introduces controlled flow and paused and yeild and such and such.
// function* 
// yield 'a'
// you can you next().value and gets the next value
// you can call yeild arguments insdie of functions to show what is passed in
// Generators break the "run to completion" model and introduce functions that can start, pause, and reset