'use strict';

const multiplyMatrix = (inputMatrix: number[][]): number[][] => {

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
            for (let j: number = 0; j < inputMatrix[i].length; j++) {
                if ((i % 2 == 0 && inputMatrix[i][j] % 2 == 0) || (i % 2 == 1 && inputMatrix[i][j] % 2 == 1)) {
                    inputMatrix[i][j] *= 2;
                }
            }
        }
    }
    return inputMatrix;
}

export default multiplyMatrix;