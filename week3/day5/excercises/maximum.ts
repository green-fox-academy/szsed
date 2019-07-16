// Maximum finder
// Write a function that finds the largest element of an array using recursion.

'use strict';

let maxFinder = (input: number[]): number => {
    // console.log(input.length);
    if (input.length == 1) {
        return input[0];
    }
    else if (input[0] < input[1]) {
        input.splice(0, 1);
        return maxFinder(input);
    }
    else {
        input.splice(1, 1);
        return maxFinder(input);
    }
}

let testArray = [4, 5, -11, 56, 3, 87, -5];

console.log(maxFinder(testArray));