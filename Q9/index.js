let calculateAvg = (arr) => {
  let total = arr.reduce((accum, currElem) => accum + currElem, 0);
  console.log(total);
  return total/ arr.length;
}
console.log(calculateAvg([1,2,4,5,6,7]));