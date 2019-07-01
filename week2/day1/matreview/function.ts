'use strict'

let numberToMultiply: number = 12;

let twice: number = numberToMultiply * 2;
console.log(twice);

let anotherNumberToMultiply: number = 11;

let twiceAnotherOne: number = anotherNumberToMultiply * 2;
console.log(twiceAnotherOne);

function printNumberAndChangeIt(inputNumber:number = 100) {
    let doubledValue: number = inputNumber * 2;
    console.log(doubledValue);
}

printNumberAndChangeIt(12);
printNumberAndChangeIt(11);
console.log(printNumberAndChangeIt());

function multiplication (base: number, another: number): number {
    return base * another;
}

console.log(multiplication(5,7));