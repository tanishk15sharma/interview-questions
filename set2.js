// Write a program that removes the time from the given date string "Wed April 15, 7 pm". It should return only the date without the time.

const getDateOnlyForLoop = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ",") {
      break;
    }
    result += str[i];
  }
  return result;
};

// console.log(getDateOnlyForLoop("Wed April 15, 7pm"));

// Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word.

const noSpacesString = (str) => {
  let result = "";

  for (let letter of str) {
    if (letter !== " ") {
      result += letter;
    }
  }
  return result;
};

// console.log(noSpacesString("       We are     neoGrammers   "));

// --------------------------------------------------------------------------

// Write a program that masks all but the last four characters of the string "5565534276455423" to '#'

const maskString = (str) => {
  let result = "";
  let i = 0;
  for (; i < str.length - 4; i++) {
    result += "#";
  }
  for (; i < str.length; i++) {
    result += str[i];
  }
  return result;
};

// console.log(maskString("5565534276455"));

const checkPalindrome = (str) => {
  let k = 0;
  let j = str.length - 1;

  for (let i = 0; i < str.length; i++) {
    if (str[k++] !== str[j--]) {
      return false;
    }
  }

  return true;
};

// console.log(checkPalindrome("madam121madam"));

const reverseWordWise = (str) => {
  let result = "";
  let strArr = str.split(" ");

  for (let i = strArr.length - 1; i >= 0; i--) {
    result += strArr[i];
    if (i > 0) {
      result += " ";
    }
  }

  return result;
};

console.log(reverseWordWise("Welcome to neoG Camp"));
