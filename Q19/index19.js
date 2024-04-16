// Write a function to convert a string to camelCase $ snake_case.


// const toCamelCase = (str) => {
//   return str.trim().split(' ').map((currElem, i) => {
//     if (i === 0) {
//       return currElem.toLowerCase();
//     } else {
//       return currElem.charAt(0).toUpperCase() + currElem.slice(1).toLowerCase();
//     }
//   }).join('');
// }

// // EX:

// console.log(toCamelCase('hi i am a software engineer'));


// Snake Case


const toSnakeCase = (str) => {
  return str.trim().split(' ').map((currElem, i) => {
    return `${currElem}_`;

  }).join('');
}

// EX:

console.log(toSnakeCase('hi i am a software engineer'));