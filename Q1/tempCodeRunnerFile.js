strArr = strArr.sort((a, b) => b.length - a.length);
  console.log(strArr);
  // return strArr.at(-1)
  return `=> ${strArr[0]} <= is the longest`;