// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

'use strict';

const fs = require('fs');

let pathInput: string = 'subfolder/subberfolder/evensubberfolder/my-words.txt';
let wordInput: string = 'hello';
let numberOfLines: number = 5;

let pathArray: string[] = pathInput.split('/');
pathArray.pop();

let targetFolder: string = pathArray.join('/');


let writeMultiLinesToFile = (path: string, word: string, num: number) => {
    fs.mkdirSync(targetFolder, { recursive: true });

    try {
        fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK);
        console.log('can read/write');

        let wordManyTimes: string = '';

        for (let i = 0; i < num; i++) {
            wordManyTimes += word + '\n';
        }
        fs.writeFileSync(path, wordManyTimes);


    }
    catch (e) {
    }

}

writeMultiLinesToFile(pathInput, wordInput, numberOfLines);