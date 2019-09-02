'use strict';

const myPromise = new Promise((resolve, reject) => setTimeout(() => reject(new Error('REJECTED!')), 300));

const onReject = err => console.log(err.message);

myPromise.then(null, onReject);