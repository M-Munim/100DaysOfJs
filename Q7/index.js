let findMaX = (arr) => {
  let vall = Math.max(...arr);
  return [vall]
}

console.log(findMaX([1, 3, 4, 5, 7, 8, 9, 7, 77, 7]));
console.log(findMaX([-1, -3, -4, -7]));
console.log(findMaX([7]));
