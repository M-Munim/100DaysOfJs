// Simple Interest Calculator

// Write a function that calculates the simple interest given the principle amount, rate of interest per annum, and time in years.

const calSimpInt = (p, r, t) => {
  return (p * r * t) / 100;
}

console.log(calSimpInt(1000, 5, 3));
console.log(calSimpInt(4000, 4, 2));
console.log(calSimpInt(6000, 5, 10));