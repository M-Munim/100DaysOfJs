// Write a Function called repeatString that takes two parameters.

// str:A string that needs to be repeated.
// num: An integer representing the number of times the string should be repeated.
// The function should repeat the input string ste the specified number of times num and return the resulting string.


const repeatString = (str, num) => {
  if (str.length === 0) {
    return "No output"
  } else {
    return num > 0 ? str.repeat(num) : str;
  }
}


console.log(repeatString("abc", 2));