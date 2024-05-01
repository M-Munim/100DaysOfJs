// Recursive  Number range Generator

// Write a recursive function that generates an array containing consecutive nums from a to b.

//                         0 ,5 , [] 
const numRangeRecursive = (a, b, arr = []) => {
  //  0 <= 5
  if (a <= b) {
    //  [0]
    arr.push(a);
    //                      0+1= 1, 5 , [0]
    return numRangeRecursive(a + 1, b, arr);
  }
  return arr;
};


console.log(numRangeRecursive(0, 5));
// console.log(numRangeRecursive(0, 5));
// console.log(numRangeRecursive(0, 5)); 