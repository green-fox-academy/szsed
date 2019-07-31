'use strict';

const rotateMatrix = (inputMatrix: number[][]): number[][] => {
    let rotatedMatrix: number[][] = []

    if (inputMatrix == undefined) {
        console.log('please provide input matrix')
        return undefined;
    }
    else if (inputMatrix.length == 0) {
        console.log('please provide non-empty matrix')
        return undefined;
    }
    else {
        for (let i: number = 0; i < inputMatrix.length; i++) {
            rotatedMatrix[i] = [];
            if (inputMatrix.length != inputMatrix[i].length) {
                console.log('please provide n x n  matrix');
                return undefined;
            }
        }
        for (let i: number = 0; i < inputMatrix.length; i++) {
            for (let j: number = 0; j < inputMatrix[i].length; j++) {
                rotatedMatrix[j][inputMatrix[i].length - i - 1] = inputMatrix[i][j];
            }
        }
    }
    return rotatedMatrix;
}

export default rotateMatrix;