## Conceptual Aside (cover something that is a side of the direct but important)

- Focus on a Concept for idea that is fundemental to understand javascript
- Syntax parsers, execution contexts and lexical environments

### Syntax Parser

- A program that reads your code and determines what it does and if its grammer is valid

- there is in interpreter with your doe and computer instructions in between it is the "syntax parser"
- your code is not whats given to the computer but an interpretation (compiler)

### Lexical Environment

- Where something sits physically in the code you write
- Where you write something is important

- If you have a function and a variable is inside of it,  the variable sits lexically inside of the function
- The compiler cares about where you put your code and where its written and what surronds it

### Execution context

- A wrapper to help manage the code that is running
- within the lexical environment it is running and being manged via execution context. 

- This is what is happening under the hood in javascript

## Conceptual Aside; Name/Value Pairs and Objects

### Name/Value Pair

- A name which maps to a unique value
- name can be defined more than once but only can have one value in any given context
- Ex. Address = '100 Main st. (address is name, '' is the value)

### Object

- A Collection of name/value pairs

## The Global Environment and the global object

- whenever code is run in javaScript it is run in execution context
- execution context creates a global object and 'this' created by javascript engine

- if you type 'this' inside of the console in the empty html and app.js you will see Window object
- this window object is the global object inside of browsers
- this is the javascript engine doing this for us and created a var called 'this'
- 'this' is the window object

- Global means 'not inside a function'
- in Javascript when you craete a variable and function it attaches to the global object

- outer environment is running outside of the function
- exection context is running your code