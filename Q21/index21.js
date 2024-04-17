// A function that takes an array of numbers as input and returns the mean(average) of those numbers.

// NOTE:

// The input array may contain positive and negative integers.
// Array may be empty. If it is empty, function should return 0.

const calculateMean = (arr) => {
  if (arr.length === 0) {
    return 0
  }

  let sum = arr.reduce((accum, currElem) => accum + currElem, 0)
  // return Math.floor(sum / arr.length /);
  return Math.floor((sum / arr.length) * 100) / 100;
  // return sum / arr.length;
}

console.log(calculateMean([1, 2, 3, 4, 5, 6, 7]));
console.log(calculateMean([100, 20, 30]));
console.log(calculateMean([-1, 20, -30]));
console.log(calculateMean([]));