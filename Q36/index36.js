// Convert OBJ to Array and vice versa


let myObj = {
  name: "jhon seena",
  age: 45,
  job: "wrestler",
  country: "USA",
};


let entries = Object.entries(myObj);
console.log(entries.flat());

let toObj = Object.fromEntries(entries);
console.log(toObj);