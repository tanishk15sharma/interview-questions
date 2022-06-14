// Q. Given a and b, your function should return the value of a^b
// function getPower(a, b) {
//   return a ** b;
// }
// console.log(getPower(2, 3));

// Q. Given an array, your function should return the length of the array.
// function getArrLength(arr) {
//   let length = 0;
//   for (let i of arr) {
//     length++;
//   }
//   return length;
// }
// console.log(getArrLength([1, 2, 3, 4]));

// Q. Write a function that generates a secret code from a given string, by shifting characters of the alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

// let letters = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// const generateSecretCode = (str, shiftBy) => {
//   let secretCode = "";
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < letters.length; j++) {
//       if (str[i] === letters[j]) {
//         secretCode = secretCode + letters[j + shiftBy];
//       }
//     }
//   }
//   return secretCode;
// };

// console.log(generateSecretCode("neogcamp", 2));
