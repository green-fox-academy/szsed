'use strict';

const myPromise = new Promise((resolve, reject) => {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

const onReject = err => console.log(err.message);

myPromise.then(console.log, onReject);