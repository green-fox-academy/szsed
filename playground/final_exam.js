// # Final Exam Mini Exercises
// You have to solve only one problem, that is assigned to you. Please don't use
// direct built in functions for the given problem like: reverse, count, indexOf, groupBy, split, join, etc...
// ​
// ​
// ## 1.
// ​
// Create a function that takes a matrix (list of lists) of numbers and sums all the numbers.
// ​

const sumMatrixElements = matrix => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

console.log('1.', sumMatrixElements([[1, 2], [3, 4]]));

// ## 2.
// Create a function that reverses a string
// ​

const reverseString = str => {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed += str[str.length - 1 - i];
  }
  return reversed;
}

console.log('2.', reverseString('cica'));

// ## 3.
// Create a function that determines if a string is a palindrome
// ​

const isPalindrome = str => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}


console.log('3.', isPalindrome('cica'));
console.log('3.', isPalindrome('görög'));


// ## 4.
// Create a function that returns how many letters in the word: "duck" (it is four)
// ​

const countLettersInDuck = () => ('duck').length;

console.log('4.', countLettersInDuck());

// ## 5.
// Create a function that takes two arrays and decides if their content is the same
// ​

const compareMatrices = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

console.log('5.', compareMatrices([1, 2, 3], [1, 2, 3]));
console.log('5.', compareMatrices([1, 2, 3], [1, 2, 3, 4]));
console.log('5.', compareMatrices([1, 2, 3], [1, 3, 2]));

// ## 6.
// Create a function that takes a number returns a matrix (list of lists) with height and width as the number,
// all of it's elments should be zero, beside the main diagonal should be ones like:




// ```
// 1 0 0 0 0
// 0 1 0 0 0
// 0 0 1 0 0
// 0 0 0 1 0
// 0 0 0 0 1
// ```
// ​

const createMatrixWithMainDiagonal = length => {
  const matrix = [];

  for (let i = 0; i < length; i++) {
    matrix[i] = [];
    for (let j = 0; j < length; j++) {
      matrix[i][j] = 0;
      if (i === j) matrix[i][j] = 1;
    }
  }

  return matrix;
}

console.log('6.', createMatrixWithMainDiagonal(5));

// ## 7.
// Create a function that takes a string and a letter, than returns a list that contains all the
// indexes where the letter occured in the string.
// ​

const getIndices = (str, letter) => {
  const indexList = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) indexList[indexList.length] = i;
  }
  return indexList;
}

console.log('7.', getIndices('alibaba', 'a'));

// ## 8.
// Create a function that takes two arrays and mixes them like this:
// `[1, 2, 3]` and `[6, 7, 8]` becomes `[1, 6, 2, 7, 3, 8]`
// ​

const mixArrays = (array1, array2) => {
  const mixedArray = [];
  for (let i = 0; i < array1.length; i++) {
    mixedArray[i * 2] = array1[i];
    mixedArray[i * 2 + 1] = array2[i];
  }
  return mixedArray;
}

console.log('8.', mixArrays([1, 2, 3], [6, 7, 8]));

// ## 9.
// Create a function that takes an array of integers and retunrs the biggest from each of its second elements like:
// `[1, 3, 8, 6, 7, 4]` would return 6
// 

const getBiggestAtOddIndex = arr => {
  let max = -Infinity;
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log('9.', getBiggestAtOddIndex([1, 3, 8, 6, 7, 4]));

// ## 10.
// Create a function that takes an array of integers and returns the average of the even numbers from that array
// ​

const getAvgOfEven = arr => {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
      count++;
    }
  }
  if (count) return sum / count;
  return null;
}

console.log('10.', getAvgOfEven([1, 2, 3, 4, 5, 5, 5, 6]));
console.log('10.', getAvgOfEven([1, 3, 3, 3, 5, 5, 5, 5]));

// ## 11.
// Create a function that takes two strings and decides if one is anagram of the other
// ​

const myIndexOf = (str, letter) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) return i;
  }
  return -1;
}

const removeCharacterAtIndex = (str, index) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i !== index) newStr += str[i];
  }
  return newStr;
}

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str2.length; i++) {
    const indexInFirst = myIndexOf(str1, str2[i]);
    if (indexInFirst === -1) return false;
    str1 = removeCharacterAtIndex(str1, indexInFirst);
  }
  return true;
}

console.log('11.', isAnagram('silent', 'listen'));
console.log('11.', isAnagram('rail safety', 'fairy tales'));
console.log('11.', isAnagram('mama', 'papa'));

// ## 12.
// Create a function that takes a matrix (list of lists) of numbers and returns the sum of each rows as an array

const sumRows = matrix => {
  const sums = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
    sums[i] = sum;
  }
  return sums;
}

console.log('12.', sumRows([[1, 2, 3], [3, 2, 3]]));
console.log('12.', sumRows([[1, 2, 3], [1, 2, 3, 4]]));


// ## 13.
// Create a function that takes a list of strings and transforms it like:
// ​
// ```
// [
//  "abc",
//  "ijk",
//  "xyz"
// ]
// ```
// ​
// becomes
// ​





// ```
// [
//  "aix",
//  "bjy",
//  "ckz"
// ]
// ```
// ​

const mirrorStrings = stringArr => {
  const newStringArr = [];
  for (let i = 0; i < stringArr.length; i++) {
    let newString = '';
    for (let j = 0; j < stringArr.length; j++) {
      newString += stringArr[j][i]
    }
    newStringArr[i] = newString;
  }
  return newStringArr;
}

console.log('13.', mirrorStrings(['abc', 'ijk', 'xyz']));

// ## 14.
// Create a function takes a string and a letter and splits the string to an list of strings by the letter like:
// `"a,bcd,e,fg"` and `','` becomes `["a", "bcd", "e", "fg"]`
// ​

const mySplit = (str, char) => {
  let subStr = '';
  let strArr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      strArr[strArr.length] = subStr;
      subStr = '';
    } else {
      subStr += str[i];
    }
    if (i === str.length - 1) strArr[strArr.length] = subStr;
  }
  return strArr;
}

console.log('13.', mySplit('a,bcd,e,fg', ','));
console.log('13.', mySplit(',a,bcd,e,fg,', ','));

// ## 15.
// Create a function that takes a string and splits it to a list of two character strings like:
// `"abcdef"` becomes `["ab", "cd", "ef"]`
//

const splitIntoTwos = str => {
  let subStr = '';
  let strArr = []
  for (let i = 0; i < str.length; i++) {
    subStr += str[i];
    strArr[strArr.length] = subStr;
    if (i % 2 === 1) subStr = '';
  }
  return strArr;
}

console.log('15.', splitIntoTwos('abcdefgh'));

// ## 16.
// Create a function that takes a list of strings and a letter and returns a string where the strings are joined with the given letter like:
// `["ab", "cde", "fg"]` and `" "` becomes `"ab cde fg"`
// ​

const myJoin = (arr, char) => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str += arr[i];
    } else {
      str += arr[i] + char;
    }
  }
  return str;
}

console.log('16.', myJoin(['ab', 'cde', 'fg'], ' '));

// ## 17,
// Create a function that takes an array and a number and shifts the values of the array by the given number like:
// `[1, 2, 3, 4, 5]` and `2` becomes `[4, 5, 1, 2, 3]`
// ​

const shiftArray = (arr, num) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr[(i + num) % arr.length] = arr[i];
  }
  return newArr;
}

console.log('17.', shiftArray([1, 2, 3, 4, 5], 2))

// ## 18.
// Create a function that takes two strings and returns an array of characters that consitst all the common letters of the two arrays
// ​

const myIndexOfV2 = (strOrArr, letter) => {
  for (let i = 0; i < strOrArr.length; i++) {
    if (strOrArr[i] === letter) return i;
  }
  return -1;
}


const commonChars = (str1, str2) => {
  const commonArr = [];
  for (let i = 0; i < str2.length; i++) {
    if (myIndexOfV2(str1, str2[i]) >= 0 && myIndexOfV2(commonArr, str2[i]) === -1) commonArr[commonArr.length] = str2[i];
  }
  return commonArr
}

console.log('18.', commonChars('kjshdfkjs', 'ksherqekjqea'));

// ## 19.
// Create a function that takes a list of numbers and returns a new list where all the duplicate values are removed
// ​

const removeDuplictes = arr => {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isInfilteredAlready = false;
    for (let j = 0; j < filteredArr.length; j++) {
      if (arr[i] === filteredArr[j]) isInfilteredAlready = true;
    }
    if (!isInfilteredAlready) filteredArr[filteredArr.length] = arr[i];
  }
  return filteredArr;
}

console.log('19.', removeDuplictes([1, 2, 3, 4, 5, 1, 2, 2, 3, 7, 9, 11, 2]));

// ## 20.
// Create a function that takes a list of numbers and returns the second biggest element from it
// ​

const getSecondBiggest = arr => {
  if (arr.length < 2) return null;
  let biggest = -Infinity, second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      second = biggest;
      biggest = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}

console.log('20.', getSecondBiggest([1, 2, 45, 76, 234, 54, 88, 4, 7, 111, 65]));
console.log('20.', getSecondBiggest([1]));

// ## 21.
// Create a function that takes two list of numbers and returns a new list that only consists those numbers that are in the first array but not in the second
// ​

const getNumbersOnlyInFirst = (arr1, arr2) => {
  const numbersInFirst = [];
  for (let i = 0; i < arr1.length; i++) {
    let inSecond = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) inSecond = true;
    }
    if (!inSecond) numbersInFirst[numbersInFirst.length] = arr1[i];
  }

  return numbersInFirst;
}

console.log('21.', getNumbersOnlyInFirst([1, 2, 3, 4, 5, 6, 7, 8], [3, 5, 9, 11, 12, 7, -12]));

// ## 22
// Create a function that takes an array of integers and returns a new one consisting only those numbers that occured minimum twice in the original array

const getDuplicates = arr => {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    let alreadyFound = false;
    for (let j = 0; j < duplicates.length; j++) {
      if (arr[i] === duplicates[j]) alreadyFound = true;
    }
    if (!alreadyFound) duplicates[duplicates.length] = arr[i];
  }
  return duplicates;
}

console.log('22.', getDuplicates([1, 2, 1, 4, 5, 6, 4, 8, 9, 2]));
