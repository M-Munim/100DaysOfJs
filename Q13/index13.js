// Write a funct that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e' ,'i', 'o','u' as vowels (both lowercase and uppercase).

const countVowels = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  let arr = str.split("")
  let count = 0;

  for (const char of arr) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
};

// Example:
console.log(countVowels('Helloee Worls'));
console.log(countVowels('the QUick Brown car'));
console.log(countVowels('Rocket Fuel'));

// NOTE:

// Input string may contain letters in both uppercase and lowercase .
// Output should be a non-negative integer representing the count of vowels in the input string. 