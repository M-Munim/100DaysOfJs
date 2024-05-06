// calculate age from birhtDate

// A func that takes birthDate as input and returns the current age of a person. The BirthDate will be provided in the format "YYYY-MM-DD"


const calAge = (birhtDate) => {

  let todayDate = new Date();
  birhtDate = new Date(birhtDate);

  age = todayDate.getFullYear() - birhtDate.getFullYear();

  let monthDiff = todayDate.getMonth() - birhtDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && todayDate.getDate() < birhtDate.getDate())) {
    age--;
  }

  return age;
}

console.log(calAge("1990-02-15"));