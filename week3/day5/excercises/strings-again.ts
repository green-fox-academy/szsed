// Strings again
// Given a string, compute recursively a new string where all the 'x' chars have been removed.

'use strict';

let xRemover = (input: string): string => {
    if (input.indexOf('x') == -1) {
        return input;
    }
    else {
        return xRemover(input.slice(0, input.indexOf('x')).concat(input.slice(input.indexOf('x') + 1)));
    }
}

console.log(xRemover('sdfxxxgdfx'));