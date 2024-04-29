//write a  function called Findmode that takes an array of numbers as input and returns the array (the number that appears most frequently)

function findMode(arr) {

  let count = {};
  let maxNum = 0;
  let mode;

  // Iterate through each element in the input array
  for (const elem of arr) {

    // Increment the count of the current element in the count object
    count[elem] = (count[elem] || 0) + 1;

    // Check if the count of the current element is greater than the maximum count so far
    if (count[elem] > maxNum) {

      // If yes, update the maximum count and the mode
      maxNum = count[elem];
      mode = elem;
    }
  }
  console.log(count);
  return mode;
};


console.log(findMode([2, 3, 5, 2, 3, 4, 6, 2, 1, 2]));