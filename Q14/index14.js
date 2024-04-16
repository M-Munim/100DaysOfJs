// Write a function that takes an integer num as input and returns true if num is a power of two, false otherwise.

const isPowerOfTwo = (num) => {

  let result = false;
  for (let i = 1; i < num; i++) {
    if (2 ** i === num) {
      result = true;
    }
  }
  return result;
}

// Example:
console.log(isPowerOfTwo(8)); // Output: true
console.log(isPowerOfTwo(7)); // Output: false
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(15)); // Output: false
console.log(isPowerOfTwo(1)); // Output: false

// Note:

// The input num will be a positive integer.
// Zero and negative int are not considered power of two.
// The Function should return true if the given number is a power of two.
// Should return true if the given number is a power of 2, and false otherwise.