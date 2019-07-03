'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

let makingMatches = function(g: string[], b: string[]): string[][]{

    let pairs: string[][] = [];
    let pairsLength = Math.max(g.length, b.length);

    for (let i=0; i< pairsLength; i++){
        pairs[i] = [];
        pairs[i][0] = g[i];
        pairs[i][1] = b[i];
    }
    return pairs;
}

console.log(makingMatches(girls, boys));

export = makingMatches;