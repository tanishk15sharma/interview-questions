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

console.log(
  findFrequentNum([2, 4, 6, 9, 8, 5, 3, 2, 6, 7, 8, 3, 2, 6, 7, 7, 6, 2, 7])
);

// -------------------------------------------------------------------------------------------
