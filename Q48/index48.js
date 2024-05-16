const validateHexClr = (str) => {
  let regex = /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/
  return regex.test(str)
}

console.log(validateHexClr("#a3c113"));
console.log(validateHexClr("#fff"));
console.log(validateHexClr("#1223445"));
console.log(validateHexClr("#1223445"));