'use strict';

const myPromise = new Promise((res, rej) => rej(new Error('HELLO')));
myPromise.catch(err => console.log(err.message));
const myPromise2 = Promise.resolve('MORE HELLO');
myPromise2.then(console.log);
const myPromise3 = Promise.reject('EVEN MORE HELLO');
myPromise3.catch(console.log);