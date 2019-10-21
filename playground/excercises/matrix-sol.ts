// Write a function that takes a matrix with dimensions of at least 3 x 3
// The function should find all possible 'hourglasses' in the matrix
// and return an array of the sums of elements in all possible hourglasses in the matrix
// An hourglass is a pattern of matrix elements like this:
// [1, 4, 7],
// [   8,  ],
// [5, 2, 9]

'use strict';

const hourglassesSol = (matrix: number[][]): number[] => {
    let result: number[] = [];
    for (let i: number = 0; i < matrix.length - 2; i++) {
        for (let j: number = 0; j < matrix[i].length - 2; j++) {
            let hourglassSum: number = matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2]
                + matrix[i + 1][j + 1]
                + matrix[i + 2][j] + matrix[i + 2][j + 1] + matrix[i + 2][j + 2];
            result.push(hourglassSum);
        }
    }
    return result;
}

// So, using our function on the following matrix:

const testMatrixSol: number[][] = [
    [5, 8, 1, 3, 5],
    [4, 4, 2, 6, 8],
    [3, 9, 1, 2, 2],
    [6, 1, 4, 5, 1]
];

// Should return: [ 31, 26, 20, 30, 23, 28 ]

console.log(hourglassesSol(testMatrixSol));