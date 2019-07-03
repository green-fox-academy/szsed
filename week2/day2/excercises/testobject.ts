'use strict';

let test = {
a:1,
b:2
};

Object.defineProperty(test, 'c', {value: 3});

console.log(test.c);