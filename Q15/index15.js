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



// Second Approach 



const isPowerOfTwoo = (num) => {
  // Check if num is a positive integer and if it has exactly one bit set


  //   This expression performs a bitwise AND operation between num and num - 1.

  // When you subtract 1 from a power of two, it flips all the bits from the rightmost 1 bit to the end to 0, and flips that rightmost 1 bit itself to 0. For example:

  // If num is 8(binary: 1000), num - 1 is 7(binary: 0111).
  // If num is 16(binary: 10000), num - 1 is 15(binary: 01111).
  // When you perform a bitwise AND operation between num and num - 1, all bits that are set to 0 in num - 1 will be set to 0 in the result.However, the rightmost 1 bit in num and all bits to its right will be cleared out to 0.

  // If num is a power of two, it will have exactly one bit set to 1. When subtracting 1 from a power of two, all bits to the right of this one bit will be set to 1, and this one bit itself will be cleared out. Therefore, the result of the bitwise AND operation will be 0 
  return num > 0 && (num & (num - 1)) === 0;
}

console.log(isPowerOfTwoo(8)); // Output: true
console.log(isPowerOfTwoo(7)); // Output: false
console.log(isPowerOfTwoo(16)); // Output: true
console.log(isPowerOfTwoo(15)); // Output: false
console.log(isPowerOfTwoo(1)); // Output: true