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