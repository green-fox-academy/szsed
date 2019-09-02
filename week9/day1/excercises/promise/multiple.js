'use strict';

const all = (prom1, prom2) => {
    let counter = 0;
    let arr = [];
    return new Promise(resolve => {
        const promiseHandler = result => {
            counter++;
            arr.unshift(result);
            if (counter >= 2) {
                resolve(arr);
            }
        }
        prom1.then(promiseHandler);
        prom2.then(promiseHandler);
    });
}

all(getPromise1(), getPromise2()).then(console.log);