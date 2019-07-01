// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict'

let size: number = 4;
let matrix: number[][] = [];

for (let i = 0; i < size; i++) {
    let row: number[] = [];
    for (let j = 0; j < size; j++) {
        if (i + j === size - 1) {
            row.push(1);
        }
        else {
            row.push(0);
        }
    }
    matrix.push(row);
}

console.log(matrix);

matrix.forEach((row) => console.log(row.join(" ")));