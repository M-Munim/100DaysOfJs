// Write a function to sort an array of numbers in an ascending order

// let sortAscending = (arr) => {
//   return arr.sort();
// }
// console.log(sortAscending([5, 3, 2, 1, 4, 6, 7]));


let sortAscendingTwo = (arr) => {
  // return arr.sort((a, b) => a - b);
  return arr.sort((a, b)=> a - b);
}
console.log(sortAscendingTwo([5, 3, 2, 1, 100, 200, 4, 6, 7]));