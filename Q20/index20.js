// A function to reverse a str without using any built-in methods or libraries. The function should take a string as input and return the reversed string.

const reverseStr = (str) => {
  // return str.split('').reverse().join(''); //built in

  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

// EX:
console.log(reverseStr('hello'));