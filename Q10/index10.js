// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e. contains the same elements in the same order), and false otherwise.

const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((curVal, index) => curVal === arr2[index]);
};

// Ex:
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysAreEqual([1, 2, 3], [1, 4, 3]));
console.log(arraysAreEqual([1, 2, 3], [3, 2, 3]));
console.log(arraysAreEqual([], [3, 2, 3]));
console.log(arraysAreEqual([], []));


// NOTE:

// The function should return false if the arrays have different lengths.
// The function should compare each elem of array 1 and array 2.
// The function should return true only if all elements in array 1 and array 2 are equal.