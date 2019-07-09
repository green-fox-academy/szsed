// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';

const fs = require('fs');

let fileName: string = 'my-fil.txt';
let content: string;


let countLines = (file: string): number => {
    if (!fs.existsSync(fileName)) {
        return 0;
    }

    content = fs.readFileSync(fileName, 'utf-8');

    let contentArr: string[] = content.split('\n');

    return contentArr.length;
}

try { 
    console.log(countLines(fileName));
}
catch (e) {
}