// Write a  function that takes three parameters representing the length of the sides of a triangle. The function should return a string indicating the type of triangle

let checkTriangleType = (a, b, c) => {
  if (a === b && b === c) return "equilateral";
  if (a === b || a === c || b === c) return "isosceles"
  return "scalene";
}
console.log(checkTriangleType(2, 4, 1));