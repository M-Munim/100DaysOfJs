// Write a function called truncateString that takes two parameters.

// str: A string that meeds to be truncated.
// maxLength: An integer representing the maximum length of the string allowed.
// ? The func should truncate the input str if its length exceeds the specified maxLength. if truncation occurs, the func should add '...' to the end of the truncated str.


const truncateStr = (str, count) => {
  return count <= 0 ? str : str.slice(0, count).concat("...");
}


console.log(truncateStr('A-tisket a-tasket A green and yellow basket', 0));