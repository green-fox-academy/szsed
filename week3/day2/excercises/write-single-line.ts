// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

'use strict';

const fs = require('fs');

let fileName: string = 'my-name.txt';
let nameString: string = 'Szabolcs Sed';


let writeNameToFile = (file: string, name: string) => {    
    try {
    fs.writeFileSync(file, name);
    }
    catch(e) {
        console.log('Unable to write file:', file);
    }
}

writeNameToFile(fileName, nameString);