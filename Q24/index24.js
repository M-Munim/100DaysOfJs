// Write a func that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values.

// EX: Median of 3,3,5,,9,15 is 5. If there is an even number, then there is no single middle value; the median is then usually defined to be the mean of the two middle values; so the median of 3,5,7,9 is (5+7)/2 = 6.


const findMedian = (arr) => {
  arr.sort((a, b) => a - b);
  // console.log(arr)

  let length = arr.length;
  let mid = Math.floor(length / 2);

  // console.log(mid);
  if (length % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    return arr[mid];
  }
}


console.log(findMedian([5, 3, 1, 9, 7]));
console.log(findMedian([10, 8, 6, 4, 2]));
console.log(findMedian([2, 55, 4, 5, 3, 1, 9, 7]));