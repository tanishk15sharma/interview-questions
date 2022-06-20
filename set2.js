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

console.log(getDateOnlyForLoop("Wed April 15, 7pm"));

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

console.log(noSpacesString("       We are     neoGrammers   "));
