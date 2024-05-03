// Check Object Emptiness

// A fun that takes an obj as input and determines whether itis empty or not. An empty obj is defined as an obj with no own properties.

const isEmptyObj = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return "its not empty"
    }
  }
  return "its empty";
}


// One Liner
// const isEmptyObj = (obj) => {
//   return Object.keys(obj).length === 0;
// }

console.log(isEmptyObj({ name: "munim" }));
console.log(isEmptyObj({}));
console.log(isEmptyObj({ keyWithNull: null }));
console.log(isEmptyObj({ keyWithUndefined: undefined }));