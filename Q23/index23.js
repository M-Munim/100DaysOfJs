// write a function to count the occurance of each elem in an array and store the counts in an obj. The keys of the obj should represent the elems of the array, and the values should represent the number of times each elem appears in the array.


// Input 

const numbers = [1, 3, 3, 2, 1, 4, 2];
let counts = {};

//  This line starts a loop that iterates over each element in the numbers array. The iterator variable will represent each individual number as the loop progresses.
for (const iterator of numbers) {

  //  This line increments the count of the current number (iterator) in the counts object. It does this by accessing the property of the counts object corresponding to the current number. If the property doesn't exist yet (i.e., if it's the first occurrence of the number), it defaults to 0. Then, it adds 1 to this count.
  counts[iterator] = (counts[iterator] || 0) + 1;
}

console.log(counts)



// output
// {'1':1, '2': 1, '3': 2, '4':2 }