// Strings again and again
// Given a string, compute recursively a new string where all the adjacent chars are now separated by a *

'use strict';

let starify = (input: string): string => {
    if (input.length <= 1) {
        return input;
    }
    else {
        return input[0] + '*' + starify(input.slice(1));
    }

}

console.log(starify('sdfxxxgdfx'));