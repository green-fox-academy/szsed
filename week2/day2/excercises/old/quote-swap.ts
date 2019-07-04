'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let quoteSwap = (arr: string[]): string => {
    let ind1: number = arr.indexOf("do");
    let ind2: number = arr.indexOf("cannot");

    arr.splice(ind1, 1, "cannot");
    arr.splice(ind2, 1, "do");

    // console.log(arr.toString());
    return arr.join(" ");
   

}

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."

export = quoteSwap;