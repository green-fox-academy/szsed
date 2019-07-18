// Count Letters
// Write a function, that takes a string as an argument and returns a dictionary 
// with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

'use strict';

let dictionaryMaker = (input: string): Map<string, number> => {
    let output = new Map();

    for (let i = 0; i < input.length; i++) {
        if (output.has(input.charAt(i))) {
            output.set(input.charAt(i), output.get(input.charAt(i)) + 1);
        }
        else {
            output.set(input.charAt(i), 1);
        }
    }

    return output;
}

export default dictionaryMaker;