// Create a method that decrypts reversed-lines.txt

const fs = require('fs');
const sourceFile: string = 'reversed-lines.txt';

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
    let contentByLine: string[] = content.split('\n');

    let decryptedLines: string[] = contentByLine.map((line) => {
        let reversedLine: string = '';

        for (let i: number = line.length - 1; i >= 0; i--) {
            reversedLine += line[i];
        }

        return reversedLine;
    })

    return decryptedLines.join('\n');
}

console.log(decryptReversed(readFile(sourceFile)));