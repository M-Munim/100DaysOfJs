const fizzBuzz = (sNum, eNum) => {
  let arr = [];
  for (let index = sNum; index <= eNum; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
      arr.push("fizzbuzz");
    } else if (index % 3 == 0) {
      arr.push("fizz");
    } else if (index % 5 == 0) {
      arr.push("buzz");
    } else {
      arr.push(index)
    }
  }
  return arr;
};

console.log(fizzBuzz(2, 33))