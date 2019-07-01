// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

'use strict'

function sum(param: number): number {

    return (param + 1) * param / 2;
}

console.log(sum(4));
console.log(sum(10));
