// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict';

const fs = require('fs');

let sourceFile: string = 'log.txt';
let content: string;
let textLines: string[] = [];

if (!fs.existsSync(sourceFile)) {
    throw Error('source file doesn\'t exist');
}

try {
    content = fs.readFileSync(sourceFile, 'utf-8');
    console.log('successful read');

} catch (err) {
    console.error(err.message);
}

let uniqueIPs = (text: string): string[] => {
    let textLines: string[] = text.split('\n');
    let firstDotIndex: number = textLines[0].indexOf('.');
    let allIPs: string[] = textLines.map((value) => value.slice(firstDotIndex - 2, firstDotIndex + 9));
    let uniqueIPs: string[] = [];

    for (let i = allIPs.length; i > 0; i--) {
        if (allIPs.indexOf(allIPs[i]) == i) {
            uniqueIPs.push(allIPs[i]);
        }

    }
    return uniqueIPs;
}

let ratioOfRequests = (text: string): number => {
    let textLines: string[] = text.split('\n');

    let numberOfGet: number = 0;
    let numberOfPost: number = 0;
    for (let i = 0; i < textLines.length; i++) {
        if (textLines[i].indexOf('GET') != -1) {
            numberOfGet++;
        }
        else if (textLines[i].indexOf('POST') != -1) {
            numberOfPost++;
        }
    }
    return numberOfGet / numberOfPost;
}

console.log(uniqueIPs(content));
console.log(ratioOfRequests(content));



