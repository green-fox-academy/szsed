// Bunnies again
// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. 
// The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. 
// Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

'use strict';

const numberOfBunnies: number = 43

let myBunnies: number[] = [];

for (let i = 0; i < numberOfBunnies; i++) {

    if (i % 2 == 0){
    myBunnies.push(2);
    }
    else {
        myBunnies.push(3);
    }
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
