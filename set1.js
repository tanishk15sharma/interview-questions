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

// ------------------------------------------------------------------

// find area of hexagon
// function findHexagonArea(length) {
//   return (((3 * Math.sqrt(3)) / 2) * length * length).toFixed(2);
// }

// console.log(findHexagonArea(10));

// Given an array and an item, your function should return the index at which the item is present.

// const getElementIndex = (arr, element) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(getElementIndex([1, 2, 8, 6, 5], 8));

// Given a sentence, return a sentence with first letter of all words as capital.

// const capatalizeWords = (sentence) => {
//   let sentenceArr = sentence.split(" ");
//   let result = [];
//   for (let i = 0; i < sentenceArr.length; i++) {
//     result.push(sentenceArr[i][0].toUpperCase() + sentenceArr[i].slice(1));
//   }
//   return result;
// };

// console.log(capatalizeWords("hi i am tanishk"));

// ------------------------------------------------------------------------------------------------

// Given a sentence, your functions should return the number of words in the sentence.
// const countLetters = (sentence) => {
//   let counter = 0;
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] !== " ") {
//       counter++;
//     }
//   }
//   return counter;
// };
// console.log(countLetters("           We are neoGrammers     "));

// const replaceNumbers = (arr, num, replaceBy) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       arr[i] = replaceBy;
//     }
//   }
//   console.log(arr);
// };

// console.log(replaceNumbers([1, 5, 3, 5, 6, 8], 5, 10));

// Given an array of numbers, your function should return an array in the ascending order.
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // swaping
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
};

console.log(sortArray([100, 83, 32, 9, 45, 61, 8]));
