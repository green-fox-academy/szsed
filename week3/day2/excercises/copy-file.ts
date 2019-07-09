// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';

const fs = require('fs');

let sourceFile: string = 'my-file.txt';
let targetFile: string = 'my-copy.txt';

let copyFileToFile = (source: string, target: string): boolean => {
    let success: boolean = false;

    try {
        let content: string;
        content = fs.readFileSync(source, 'utf-8');
        fs.writeFileSync(target, content);
        success = true;
    }
    catch (e){
    }

    return success;
}

console.log(copyFileToFile(sourceFile, targetFile));