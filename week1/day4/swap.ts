'use strict';

let a: number = 123;
let b: number = 526;

console.log(a);
console.log(b);

let c: number = a;

a = b;
b = c;

console.log(a);
console.log(b);