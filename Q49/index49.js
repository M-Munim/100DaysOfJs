// a func that takes a single str input representing a date and determines if it is valid date in the format MM/DD/YY. The valid date range should be from janurary 1, 1900, to December 31,2099.

const isValidDate = (date) => {
  const mdate = new Date(date).getFullYear()
  return mdate > 1900 && mdate < 2099 ? true : false
}

console.log(isValidDate("12/15/2021"));
console.log(isValidDate("13/31/2021"));
console.log(isValidDate("12/54/2021"));
// comit q49