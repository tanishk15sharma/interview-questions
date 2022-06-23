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

console.log(
  findTransposeOfAMatrix([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

// -----------------------------------------------------------------------------
