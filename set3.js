// Write a program to calculate the sum of N natural digits, as input by the users?

const calculateSum = (num) => {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
};

// console.log(calculateSum(100));

// Write a JavaScript program that reverses a number.

const reverseNum = (num) => {
  let numStr = num.toString();
  let result = "";

  for (let i = numStr.length - 1; i >= 0; i--) {
    result += numStr[i];
  }

  return Number(result);
};

// console.log(reverseNum(32243));

// ----------------------------------------------------------------------------

const findTransposeOfAMatrix = (matrix) => {
  let transpose = [...Array(matrix[0].length)].map((a) => []);

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      transpose[i][j] = matrix[j][i];
    }
  }

  return transpose;
};

// console.log(
//   findTransposeOfAMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// );

// -----------------------------------------------------------------------------

// Given an object obj, we have to invert its key and value for each entry. Inversion will result in value being used as key and key as value.

const invertObj = (obj) => {
  let result = {};

  for (let key in obj) {
    result[obj[key]] = key;
  }
  return result;
};

// console.log(
//   invertObj({
//     name: "Doraemon",
//     age: 5,
//     hairColor: "none",
//     eyes: "oval",
//   })
// );

// Given an array of numbers, pick any two numbers a  and b, we could get the difference by Math.abs(a - b)  . Write a function to get the largest difference.

const findLargestDifference = (arr) => {
  let min = arr[0];
  let max = arr[0];

  for (let num of arr) {
    if (min > num) {
      min = num;
    }
    if (max < num) {
      max = num;
    }
  }
  return { min, max };
};

// console.log(findLargestDifference([5, 7, 8, 4, 2, 4, 5, 18, 13]));

// > Given an array `arr` with different counts of numbers, we have to find the number with the most frequency and return it.
// If there are two or more numbers with the same most frequency they return the biggest number.

const findFrequentNum = (arr) => {
  let numbersFrequency = {};

  //   counting frequency of all the numbers
  for (let num of arr) {
    if (numbersFrequency[num]) {
      numbersFrequency[num]++;
    } else {
      numbersFrequency[num] = 1;
    }
  }

  let mostFrequentNum = { num: 0, count: 0 };
  // storing number with largest frequency
  for (let key in numbersFrequency) {
    if (numbersFrequency[key] > mostFrequentNum.count) {
      mostFrequentNum.count = numbersFrequency[key];
      mostFrequentNum.num = key;
    }
  }

  // check for largest num
  for (let key in numbersFrequency) {
    if (
      mostFrequentNum.count === numbersFrequency[key] &&
      Number(mostFrequentNum.num) < key
    ) {
      mostFrequentNum.num = key;
    }
  }

  return mostFrequentNum;
};

// console.log(findFrequentNum([2, 4, 6, 9, 3, 2, 6, 7, 8, 2, 6, 7, 7, 6, 2, 7]));

// -------------------------------------------------------------------------------------------

//Given an array of integer nums and an integer target, check if there are two numbers in the array such that they add up to target. Return any one pair that add up to the target

const checkTargetPair = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        // result.push(arr[i], arr[j]); this is also right
        return [arr[i], arr[j]];
      }
    }
  }
  return -1;
};

// console.log(checkTargetPair([3, 7, 11, 15], 18));

//Given an array and size k, break the array into chunks of k-length and return them as an array.

const chunksOfArr = (arr, chunkLength) => {
  let result = [];
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (tempArr.length === chunkLength) {
      result.push(tempArr);
      tempArr = [];
    }
    tempArr.push(arr[i]);
  }
  return result;
};

// console.log(chunksOfArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3));

const findLeastFrequentNum = (arr) => {
  const numFrequencyStorage = {};

  for (let num of arr) {
    if (numFrequencyStorage[num]) {
      numFrequencyStorage[num]++;
    } else {
      numFrequencyStorage[num] = 1;
    }
  }

  const output = { num: 0, count: arr.length };

  for (let key in numFrequencyStorage) {
    if (numFrequencyStorage[key] < output.count) {
      output.count = numFrequencyStorage[key];
      output.num = key;
    }
  }
  return output;
};

// console.log(findLeastFrequentNum([2, 2, 3, 4, 4, 4, 2, 5, 5, 5, 6, 6, 8, 8]));

// --------------------------------------------------------------------------------
