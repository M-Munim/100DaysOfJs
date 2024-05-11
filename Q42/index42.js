const validateCreditCard = (str) => {
  // initial
  str = str.replace(/\D/g, "");

  // reverse the digit

  let revNum = "";
  for (let index = str.length - 1; index >= 0; index--) {
    revNum - revNum + str[index];
  };

  // double every 2nd digit

  let doubleNum = revNum.split("").map((curDigit, index) => {
    if (index % 2 != 0) {
      curDigit = curDigit * 2;

      if (curDigit > 9) {
        curDigit = curDigit - 9;
      } else {
        curDigit = curDigit;
      }
    }
    return curDigit;
  })

    .reduce((accum, curElem) => accum + Number(curElem), 0);
  console.log(doubleNum);

  return doubleNum % 10 === 0;
}

console.log(validateCreditCard("8900 6987 7565 5766"));