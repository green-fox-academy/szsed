'use strict';

import test = require('tape');
import multiplyMatrix from './multiplyMatrix';

test('testing invalid input error handling', (t: any) => {
    let testInput: number[][];
    t.equals(multiplyMatrix(testInput), undefined);
    t.equals(multiplyMatrix([]), undefined);
    t.end();
});

test('testing main logic', (t: any) => {
    t.equals(multiplyMatrix([
        [1, 3, 6, 2],
        [7, 5, 6, 1],
        [3, 3, 1, 5],
        [9, 0, 5, 3]
    ]).toString(), [
        [1, 3, 12, 4],
        [14, 10, 6, 2],
        [3, 3, 1, 5],
        [18, 0, 10, 6]
    ].toString());
    t.end();
});