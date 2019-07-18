// Anagram
// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

'use strict';

let anagramChecker = (string1: string, string2: string): boolean => {
    if (string1 == undefined || string2 == undefined){
        return undefined;
    }
    else if (string1.split('').sort().join().toLowerCase() == string2.split('').sort().join().toLowerCase()){
        return true;
    }
    else {
        return false;
    }
}

export default anagramChecker;