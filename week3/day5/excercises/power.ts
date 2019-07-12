// Power
// Given base and n that are both 1 or more, 
// compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

'use strict';

let powerFunct = (base: number, n: number) => {

    try {
        if (base < 1 || n < 1 || n != Math.floor(n)) {
            throw Error('invalid input parameter: please provide numbers greater or equal to 1\n and an integer exponent');
        }
    } catch (error) {
        console.log(error.message);
        return undefined;
    }

    let result: number = base;

    if (n == 1) {
        return result;
    }

    result *= powerFunct(base, n - 1);
    return result;
}

console.log(powerFunct(-2, 3));
console.log(powerFunct(2, 3.5));
console.log(powerFunct(2, 3));
console.log(powerFunct(10, 3));
