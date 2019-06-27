'use strict';

let a: number = 3;

console.log(a);

a += 10;

console.log(a);

let b: number = 100;

console.log(b);

b -= 7;

console.log(b);

let c: number = 44;

console.log(c);

c *= 2

console.log(c);

let d: number = 125;

console.log(d);

d /= 5;

console.log(d);

let e: number = 8;

console.log(e);

let cubeOfE:number = e ** 3;

console.log(cubeOfE);

let f1: number = 123;
let f2: number = 345;

let isF1Bigger:boolean = f1>f2;

console.log(isF1Bigger);

let g1: number = 350;
let g2: number = 200;

let isG2DoubleBigger:boolean = g2*2>g1;

console.log(isG2DoubleBigger);

let h: number = 1357988018575474;

let is11Divisor:boolean = (h % 11 ) == 0;

console.log(is11Divisor);

let i1: number = 10;
let i2: number = 3;

let iComparison:boolean = i1 > i2 ** 2 && i1 < i2 ** 3;

console.log(iComparison);

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
let jDivisor:boolean = j % 3 == 0 || j % 5 == 0;

console.log(jDivisor);
console.log(j % 3 == 0 || j % 5 == 0);
