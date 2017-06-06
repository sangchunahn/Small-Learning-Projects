// function that takes in a number and returns an array of the length of that number

function arrLength(num) {
  var arr = []
  for (var i = 1; i <= num; i++ ) {
      arr.push(i)
  }
  return arr
}

// arrLength(5) => [1, 2, 3, 4, 5]
// create an empty array
// loop through the num
// push the value of i into the array on every iteration 
// return the array

console.log(arrLength(5))

// write a function that creates an array of objects each object has to have a unique id and each object has
// to have 2 keys id and name, set the name to null and id unique

// createObjArr(2) => [{id: 1, name: null}, {id: 2, name: null}]

// create an empty array
// loop over the num passed in 
// create an obj for every iteration
// create an object property called id and set it to i
// create an object property called name and set it to null
// push the object to the array 
// return array

function createObjArr(num) {
  var arr = []
  for ( var i = 0; i < num; i++) {
    // object literal
    arr.push({ 
      id: i,
      name: null
    })
  }
  return arr

}


console.log(createObjArr(5))



function x(num){
  if(num === 0) return [];
  let arr = x(num - 1);
  arr.push(num)
  return arr;
}

console.log(x(5))

function y(num){
  if(num === 0) return []; 
  let arr = y(num - 1);
  arr.push({
    id: num,
    name: null
  });
  return arr;
}

console.log(y(3))


/* 
CALL STACK

let arr = y(2);
  arr.push({
    id: 3,
    name: null
  });
  return arr;
------------------------------------
  let arr = y(1);
  arr.push({
    id: 2,
    name: null
  });
  return arr;
------------------------------------
  let arr = y(0);
  arr.push({
    id: 1,
    name: null
  });
  return arr;
  ------------------------------------
  return [];

*/