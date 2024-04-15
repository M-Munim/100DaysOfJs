// LONGEST WORD IN A STRING

// Q: WRITE A FUNCT findlongestword THAT TAKES A STRING AS 


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