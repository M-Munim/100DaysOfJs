const validatePakNum = (number) => {
  return /^(?:\+?92|0)?[345]\d{9}$/.test(number);
};

console.log(validatePakNum("923302021926")); // Output: true