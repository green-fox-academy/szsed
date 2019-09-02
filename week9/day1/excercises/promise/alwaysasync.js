'use strict';

const myPromise = new Promise(resolve => resolve('PROMISE VALUE'));
myPromise.then(console.log);
console.log('MAIN PROGRAM');