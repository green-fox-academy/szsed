// Fibonacci
// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests for multiple test cases.

'use strict';

let fibonacci = (n: number): number => {
    if (n < 1 || n == undefined || Math.round(n) != n) {
        console.log('invalid input: please provide positive integer');
        return undefined;
    }
    else if (n == 1){
        return 0;
    }
    else if (n == 2){
        return 1;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }

}

export default fibonacci;