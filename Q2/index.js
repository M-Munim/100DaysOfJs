/*
Implement a function that generates a hashtag from a given input string dot.*/

let generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }

  strArr = str.split(" ");

  strArr = strArr.map(
    (newElem) => (

      newElem.replace(newElem[0], newElem[0].toUpperCase())
      // newElem.charAt(0).toUpperCase() + newElem.slice(1)
    )
  );

  strArr = `#${strArr.join("")}`;
  return strArr;
}

console.log(
  generateHash("hello my name is mr hash")
);