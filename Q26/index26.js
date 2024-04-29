// The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones it starts with zero and one and the subsequent numbers are calculated by adding the last two numbers so the Fibonacci series looks like this 0, 1, 1, 2, 3, 5, 8, 1, 3, 2, 1

const fibonacci = (num) => {
  if (num <= 1) {
    return num;
  } else {
    // If the input num is greater than 1, the function recursively calls itself with num - 1 and num - 2, and adds the results together.

    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));