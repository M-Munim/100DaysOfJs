// Write a function to check if a given string starts with a specific substring.


// Input:
/*
  str: A string (e.g. 'Hello World').
  subStr: A subStr to check if it starts the given string (e.g ,'Hello') 
  OutPut: True if the given str  starts with the specified subString, otherwise false.
*/

const startsWith = (str, subStr) => {
  // return str.toLowerCase().startsWith(subStr.toLowerCase()); //ONE 
  return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();

}


// Ex:
console.log(startsWith('Hello World', 'Hello'));
console.log(startsWith('Hello World', 'World'));