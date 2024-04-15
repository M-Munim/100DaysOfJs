// LONGEST WORD IN A STRING

// Q: Write a function that takes a string as input and returns the longest word in the string, if there are multiple longest words return the first one encountered

// 1st Method:

// const findlongestword = (str) => {
//   if (str.trim().length === 0) {
//     return false;
//   }
//   // // spliting string to array
//   strArr = str.split(" ")

//   // strArr = strArr.sort((a, b) => a.length - b.length);
//   strArr = strArr.sort((a, b) => b.length - a.length);
//   // return strArr.at(-1)
//   return `=> ${strArr[0]} <= is the longest`;
// }

// console.log(
//   findlongestword("Lorem ipsum dolor sit amet consectetu adipisicing elit")
// );

// 2nd Method:

const findlongestword = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  strArr = str.split(" ");
  console.log(strArr)
  return strArr.reduce
    ((prevVal, currVal) => (currVal.length > prevVal.length ? currVal : prevVal));
}

console.log(
  findlongestword("Lorem ipsum dolor sit amet consectesdsfdfsdfstu adipisicing elit")
);