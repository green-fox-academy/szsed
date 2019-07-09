// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

'use strict';

let input: number = 0;

let div = (num: number) => {

    if (num === 0) {
        throw new Error('fail');
    }
    console.log(10/num);
}

try {
    div(input);
}
catch (e) {
    console.log(e.message);
}