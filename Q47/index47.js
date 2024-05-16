// Extract numbers from a string

const extractNum = (num) => {
  let regex = /\d+/g;
  return num.match(regex);
}


console.log(extractNum("abcd324kln43l"));
console.log(extractNum("kui num nahi yahan"));
console.log(extractNum("1a2s3d4f5g6h7j8k9l"));
console.log(extractNum("122,344,444,22,ans"));
console.log(extractNum("122,344,444,22,khsn"));
console.log(extractNum(""));