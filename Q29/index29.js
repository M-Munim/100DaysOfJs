// NUmber Range Generator

// Write function called numberRange that generates an array containing consecutive numbers from a to b (inclusive).

// a: An integer representing the starting number of the range.
// b: An integer representing the ending number of the range.
// arr: An optional parameter representing the array to store the number in the range. It defaults to an empty array.


const numberRange = (a, b) => {
  let arr = [];
  while (a <= b) {
    arr.push(a);
    a++;
  }
  return arr;
}


console.log(numberRange(0, 5));
console.log(numberRange(0, 7));
console.log(numberRange(3, 19));