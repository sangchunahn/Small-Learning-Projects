// two ways for recusion

function factorial(n) {
  if (n === 0) {
    console.log(n)
    return 1;
  }
  
  if (n => 1) {
    console.log(n)
    return factorial(n - 1) * n
  }
  
}

console.log(factorial(5))


function factorial2(inputNumber) {
  let total = 1;
  
  for (i = 0; i < inputNumber; i++){
      total = total * (inputNumber - i);
  }
  
  return total;
}

console.log(factorial2(5));