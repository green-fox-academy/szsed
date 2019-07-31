'use strict';

import test = require('tape');
import rotateMatrix from './rotateMatrix';

test('testing invalid input error handling', (t: any) => {
    let testInput: number[][];
    t.equals(rotateMatrix(testInput), undefined);
    t.equals(rotateMatrix([]), undefined);
    t.equals(rotateMatrix([[2, 3], [4, 5, 6]]), undefined);
    t.end();
});

test('testing main logic', (t: any) => {
    t.equals(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]).toString(), [[7, 4, 1], [8, 5, 2], [9, 6, 3]].toString());
    t.equals(rotateMatrix([[2, 4, 6, 8], [10, 12, 14, 16], [18, 20, 22, 24], [26, 28, 30, 32]]).toString(),
        [[26, 18, 10, 2], [28, 20, 12, 4], [30, 22, 14, 6], [32, 24, 16, 8]].toString());
    t.equals(rotateMatrix([[1, 0], [0, 1]]).toString(), [[0, 1], [1, 0]].toString());
    t.end();
});