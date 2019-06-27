'use strict';

let input: number = 5;
let sum: number = 0;
let average: number;

for (let i=1; i <= input; i++){
    sum += i;
}

average = sum / input;

console.log(sum);
console.log(average);