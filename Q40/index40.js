// Siimple bar chart from Array Data

// Create a func that takes an array of numbers and generates a simple text-based bar chart.

const generateBarChart = (arr) => {
  return arr.map((curElem, i) => {
    return `${i + 1}: ${"*".repeat(curElem)}`;
  }).join("\n")
}

console.log(generateBarChart([5, 3, 9, 2]));