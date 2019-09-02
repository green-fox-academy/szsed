'use strict';

const parsePromised = () => {
    return new Promise((res, rej) => {
        try {
            res(JSON.parse(process.argv[2]));
        } catch (err) {
            rej(err.message);
        }
    });
}

parsePromised().then(null, console.log);