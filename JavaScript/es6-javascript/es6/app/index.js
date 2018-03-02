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

// classes in javascripts allows us to create classes
// extends is a child class pointing to an extends parents

// constructor is props from react it is what is passed into it like a function.
// you can call the class as new Class(argument
// super() calls the parent constructor

// static methods we can access the class without declaring an instance of the class. so you don't have to put new Obj()
//Static method calls are made directly on the class and are not callable on instances of the class. Static methods are often used to create utility functions.

// every object in javascript has a proptype. prototype reveal an object's parent