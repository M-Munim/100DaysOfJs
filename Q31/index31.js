// Simple password validator

const passValidator = (pass) => {
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;
  for (const char of pass) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      hasUpperCase = true;
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      hasLowerCase = true;
    } else if (!isNaN(Number(char))) {
      hasNumber = true;
    }
  }

  if (!hasLowerCase || !hasUpperCase || !hasNumber || pass.length < 0) {
    return false;
  }
  return true
}



console.log(passValidator("adkjdhf"));
console.log(passValidator("flkjdhf"));
console.log(passValidator("fJS1jdhf"));