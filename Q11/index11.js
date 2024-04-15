// Write a function that takes a number as input and returns the sum of its digits.

const sumOfDigits = (number) => {
  let sum = 0;
  let num = Math.abs(number); //Make sure negative numbers are treated as positive

  while (num != 0) {
    //0 += 1234 % 10 ; // 4
    sum += num % 10;
    // 123 = Math.floor(1234 / 10);  // 123.4
    num = Math.floor(num / 10);
  }

  return sum;
};

// EX:
console.log(sumOfDigits(1234));
console.log(sumOfDigits(10329));
console.log(sumOfDigits(13));


// NOTE:

// Input num will always be a positive integer.
// Input num can have multiple digits.
// Output should be the sum of all the digits in the input number.

// HomeWork:
// This func calculates the sum of digits without converting the number to a string.
