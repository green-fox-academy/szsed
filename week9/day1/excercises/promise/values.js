'use strict';

const attachTitle = string => 'DR. ' + string;
const myPromise = Promise.resolve('MANHATTAN');
myPromise.then(attachTitle).then(console.log);