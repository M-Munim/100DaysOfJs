// let countChar = (words, char) => {
//   words = words.toLowerCase();
//   char = char.toLowerCase();

//   total = words.split("").reduce((accu, curVal) => {
//     if (curVal === char) {
//       accu++;
//     }
//     return accu;
//   }, 0);
//   return total;
// };

// console.log(countChar('Mississippi', 'I'));



let countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();

  totalAlphabets = word.split("").reduce((prevVal, currVal) => {
    if (currVal === char) {
      prevVal++;
    }
    return prevVal;
  }, 0);
return totalAlphabets;
}



console.log(countChar('Mississiiiippi', 'I'));
