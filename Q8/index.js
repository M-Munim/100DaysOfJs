// Write a function factorial that takes a nonnegative integer number as input and returns its factorial.

let factorial = (num) => {
  let finalVal = 1;
  for (let i = 1; i <= num; i++) {
    finalVal = finalVal * i;
  }
  return finalVal;
}

console.log(factorial(10));
console.log(factorial(3));








