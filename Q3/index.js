let countChar = (words, char) => {
  words = words.toLowerCase();
  char = char.toLowerCase();

  total = words.split("").reduce((accu, curVal) => {
    if (curVal === char) {
      accu++;
    }
    return accu
  }, 0);
  return total
};
console.log(countChar('Mississippi', 'I'));