// Create a method that decrypts reversed-order.txt

// Create a method that decrypts reversed-lines.txt

const fs = require('fs');
const sourceFile: string = 'reversed-order.txt';

let readFile = (fileName: string) => {

    if (!fs.existsSync(fileName)) {
        throw Error('source file doesn\'t exist');
    }

    try {
        let content: string = fs.readFileSync(fileName, 'utf-8');
        console.log('successful read');
        return content;

    } catch (err) {
        console.error(err.message);
    }

}

let decryptReversed = (content: string): string => {
    return content.split('\n').map((line, index, contentByLine) => contentByLine[contentByLine.length - 1 - index]).join('\n');
}

console.log(decryptReversed(readFile(sourceFile)));