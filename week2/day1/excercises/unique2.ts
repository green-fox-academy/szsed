//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

'use strict'

function unique(input: number[]): number[] {

    let uniqueArr: number[] = input.filter((value, index, arr) => arr.indexOf(value) == index)

    return uniqueArr;

}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));
//  should print: `[1, 11, 34, 52, 61]`
