// Bunnies
// We have a number of bunnies and each bunny has two big floppy ears. 
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

'use strict'

const numberOfBunnies: number = 43

let myBunnies: number[] = [];

for (let i = 0; i < numberOfBunnies; i++) {
    myBunnies.push(2);
}

let countEars = (input: number): number => {

    let result: number = 0;

    if (input > 0) {
        result += myBunnies[input - 1] + countEars(input - 1);
        return result;
    }
    return result;

}

console.log(countEars(myBunnies.length));

