// Write a function to check if a character is uppercase or lowercase.

// NOTE:
// input will be a single character
// char can be any printable ASCII char.
// You can assume that the input will always be a string of lenght 1.

const isUpperCase = (char) => {
  return char === char.toUpperCase();
}
const isLowerCase = (charTwo) => {
  return charTwo === charTwo.toLowerCase();
}

// Ex:
console.log(isUpperCase('S'));
console.log(isLowerCase('t'));
