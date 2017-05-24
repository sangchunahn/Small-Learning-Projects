// TEST DATA
//getFactorial(5) => 120  (1*2*3*4*5)
//getFactorial(2) => 2

// PROCESS
// 1. make a variable (val) to store the value as it incements 
// 2. use a forloop to get values 1 - num 
// 3. inside the loop set the value of val to the product of val and i 
// 4. after the loop, return val. 

//CODE 

function getFactorial(num){
  let val = 1; 
  for(let i = 1; i <= num; i++){
    val *= i;
  }
  return val;
}

console.log(getFactorial(5))