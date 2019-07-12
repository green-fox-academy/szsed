// # Sum Digits

// Given a non-negative integer n, return the sum of its digits recursively (without loops).

// ## Hint

// Mod (%) by 10 yields the rightmost digit (e.g. 126 % 10 is 6)

// ### Java, C++, C#, Python

// Divide (/) by 10 removes the rightmost digit (e.g. 126 / 10 is 12).

// ### JavaScript, TypeScript

// There is no integer type in JavaScript. To remove the rightmost digit you must divide (/) the number by 10 and find a way to get the the whole number portion of that number.

'use strict'

let sumDigits = (n: number): number => {

    try {
        if (n < 0 || Math.floor(n) != n) {
            throw Error('invalid input parameter: please provide a non-negative integer');
        }
    } catch (error) {
        console.log(error.message);
        return undefined;
    }

    let result: number = 0;

    if (n == 0) {
        return result;
    }

    let multiplesOfTen = 10 ** (n.toString().length - 1);
    let firstDigit: number = (n - (n % multiplesOfTen)) / multiplesOfTen;
    result += firstDigit + sumDigits(n - firstDigit * multiplesOfTen);
    return result;
}

console.log(sumDigits(647.34));
console.log(sumDigits(-25234));
console.log(sumDigits(98543));
console.log(sumDigits(0));
