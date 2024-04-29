// A function to calculate the factorial of a number (using recursion)

// RECURSION:
// Is a programming technique where a function calls itself in order to solve a problem. In essence, its a function that calls itself with similar or simpler input untill it reaches a base case.

// Base Case  & Recursive Case ??

const factorial = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}


console.log(factorial(2));