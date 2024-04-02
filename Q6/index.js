const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");

  let revStr = str.split("").reverse().join("")
  console.log(revStr);
  return str === revStr ? true : false;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));