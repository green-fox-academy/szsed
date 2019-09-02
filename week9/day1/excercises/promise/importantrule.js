'use strict';

const alwaysThrows = () => {
    throw 'OH NOES';
}

const iterate = int => {
    console.log(int);
    return ++int;
}

Promise.resolve(1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(console.log);