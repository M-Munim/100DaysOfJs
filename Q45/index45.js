// create a func that checks if a given password 


const validatePass = (pass) => {
  const reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;

  return reg.test(pass)
};

console.log(validatePass("Pas123fasdf.!"));

console.log(validatePass("password"));