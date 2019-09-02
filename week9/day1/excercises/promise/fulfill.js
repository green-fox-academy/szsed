'use stict';


const myPromise = new Promise(resolve => setTimeout(() => resolve('FULFILLED!'), 300));
myPromise.then(console.log);