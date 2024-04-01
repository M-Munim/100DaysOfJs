let checkTriangleType = (a, b, c) => {
  if (a === b && b === c) return "equilateral";
  if (a === b || a === c || b === c) return "isosceles"
  return "scalene";
}
console.log(checkTriangleType(2, 4, 1));