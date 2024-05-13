// Regex known as regular expressions are sequence of chars that defines a search pattern. these patterns are widely used for string searching and manipulation. In validation, regex helps ensure that str such as email addresses and passwords conform to expected formats.

const validateEmail = (email) => {
  return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email)
};

console.log(validateEmail("muhammadmunimoff330@gmail.com"));
console.log(validateEmail("muhammadmunimoff330@gmail..,com"));
console.log(validateEmail("muhamm@gmail.com"));