// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

'use strict';

let numberAdder = (n: number): number => {

    console.log(n);

    try {
        if (n < 1) {
            throw Error('invalid input parameter: please provide an integer greater than 0');
        }
    } catch (error) {
        console.log(error.message);
        return undefined;
    }

    let result: number = 0;

    if (n == 1) {
        result++;
        return result;
    }
    result += n + numberAdder(n - 1);
    return result;
}

console.log(numberAdder(-21));
console.log(numberAdder(5));