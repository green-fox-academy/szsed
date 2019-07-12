// Greatest Common Divisor
// Find the greatest common divisor of two numbers using recursion.

'use strict'

let greatestCommonDivisor = (num1: number, num2: number): number => {

    try {
        if (num1 < 1 || Math.floor(num1) != num1 || num2 < 1 || Math.floor(num2) != num2) {
            throw Error('invalid input parameter: please provide a positive integer');
        }
    } catch (error) {
        console.log(error.message);
        return undefined;
    }



    let result: number = 1;

    let smaller: number = 0;

    if (num1 < num2){
        smaller = num1;
    }
    else {
        smaller = num2;
    }
    if (smaller == 1){
    return result;
    }

    for (let i = 2; i <= smaller; i++){
        if (num1 % i == 0 && num2 % i == 0){
            result *= i * greatestCommonDivisor(num1 / i, num2 / i);
            return result;
        }
    }
    return result;
}

console.log(greatestCommonDivisor(-35, 49));
console.log(greatestCommonDivisor(35, 49.5));
console.log(greatestCommonDivisor(35, 49));
console.log(greatestCommonDivisor(245, 539));