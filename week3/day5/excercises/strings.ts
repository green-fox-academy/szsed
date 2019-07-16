// Strings
// Given a string, compute recursively (no loops) a new string 
// where all the lowercase 'x' chars have been changed to 'y' chars.

'use strict';

let yify = (input: string): string => {
    let output: string = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'x') {
            output += 'y';
        }
        else {
            output += input[i];
        }
    }
    return output;
}

console.log(yify('sdfxxxgdfx'));