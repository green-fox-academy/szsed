'use strict';

const fs = require('fs');

let readContent = (fileName) => {
    try {
        if (!fs.existsSync(fileName)) {
            console.log('Error: file doesn\'t exist.');
            return undefined;
        }
        else {
            return fs.readFileSync(fileName, 'utf-8');
        }
    }
    catch (error) {
        console.log('Error: unable to access file.');
        return undefined;
    }
}

module.exports = readContent;