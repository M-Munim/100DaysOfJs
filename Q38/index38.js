// Number of Days Between Two Dates

// Write a func that calc the num of days between two dates. The dates will provide in the format (YYYY-MM-DD);

const calDaysBetwDates = (date1, date2) => {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  let diff = Math.abs(d1 - d2);
  return diff / (24 * 60 * 60 * 1000);
}

console.log(calDaysBetwDates("2024-01-01", "2024-01-31"));