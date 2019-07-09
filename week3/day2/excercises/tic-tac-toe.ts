// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file
'use strict';

const fs = require('fs');

let ticTacResult = (sourceFile: string): string => {

    let content: string;

    if (!fs.existsSync(sourceFile)) {
        throw Error('source file doesn\'t exist');
    }

    try {
        content = fs.readFileSync(sourceFile, 'utf-8');
        console.log('successful read');

    } catch (err) {
        console.error(err.message);
    }

    console.log(content);
    let rows: string[] = content.split('\r\n');
    let rowLength: number = rows[0].length;
    let victoryArr: number[] = [];

    for (let i = 0; i < rowLength; i++) {
        victoryArr[i] = 0;
        for (let j = 0; j < rowLength; j++) {
            if (rows[i][j] == 'X') {
                victoryArr[i]++;
            }
        }
    }
    for (let i = 0; i < rowLength; i++) {
        victoryArr[i + rowLength] = 0;
        for (let j = 0; j < rowLength; j++) {
            if (rows[j][i] == 'X') {
                victoryArr[i + rowLength]++;
            }
        }
    }
    victoryArr[rowLength * 2] = 0;
    for (let i = 0; i < rowLength; i++) {
        if (rows[i][i] == 'X') {
            victoryArr[rowLength * 2]++;
        }
    }
    victoryArr[rowLength * 2 + 1] = 0;
    for (let i = 0; i < rowLength; i++) {
        if (rows[i][rowLength - i] == 'X') {
            victoryArr[rowLength * 2 + 1]++;
        }
    }
    if (victoryArr.indexOf(rowLength) != -1) {

        return 'X wins';
    }
    else if (victoryArr.indexOf(0) != -1) {

        return 'O wins';
    }
    else {

        return 'Draw';
    }



}



console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"