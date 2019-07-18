// Anagram
// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

'use strict';

let anagramChecker = (string1: string, string2: string): boolean => {
    let reverseString: string = '';

    for (let i = 0; i < string1.length; i++) {
        reverseString += string1.charAt(string1.length - i - 1);
    }

    if (reverseString == string2) {
        return true;
    }
    else {
        return false;
    }
}

export default anagramChecker;