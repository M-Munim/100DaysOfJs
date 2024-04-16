// Write a function that takes an array of numbers as input and returns the minimum value found in the array.

// Note:

// Array may contain both positive and negative int.
// May be empty.
// May contain duplicate values.

const findMin = (arr) => {
  if (arr.length === 0) return "Empty Array"
  return Math.min(...arr)
}


console.log(findMin([4, 6, -1, 8, 0]));
console.log(findMin([14, 6, -1, -80, 0]));
console.log(findMin([]));