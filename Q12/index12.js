// Write a func that takes an array of integers as input and removes any duplicate elems, returning a new array with only the unique elems.

const removeDuplicate = (arr) => {
  let newArr = [...new Set(arr)];
  return newArr;
};

// Ex: 
console.log(removeDuplicate([1, 2, 3, 4, 5, 3, 2]));
console.log(removeDuplicate([4, 5, 3, 2, 6, 7, 8]));
console.log(removeDuplicate([1, 2, 3]));
console.log(removeDuplicate([]));

// The new Set() method in js creates a new set object. A set obj is a collection of unique vals. It can store any type of value, whether primitive vals or obj references.


// NOTE:
// input array may contain both positive and negative integers.
// Input array may be empty.
// The elems in the input array are not guranteed to be sorted.
// Output array should retain the original order of elems from the input array.