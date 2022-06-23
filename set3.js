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
