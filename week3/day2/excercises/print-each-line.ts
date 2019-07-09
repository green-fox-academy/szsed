// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

'use strict';

const fs = require('fs');

let fileName: string = 'my-fil.txt';
let content: string;

let printByLine = (file: string) => {
    if (!fs.existsSync(fileName)) {
        throw new Error(`Unable to read file: ${fileName}`);
    }

    content = fs.readFileSync(fileName, 'utf-8');

    let contentArr: string[] = content.split('\n');

    for (let i = 0; i < contentArr.length; i++) {
        console.log(contentArr[i]);
    }

}

try { 
    printByLine(content);
}
catch (e) {
    console.log(e.message);
}