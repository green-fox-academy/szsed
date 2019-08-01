// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');
const sourceFile: string = 'duplicated-chars.txt';

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

let decryptDuplicates = (content: string): string => {
    let contentByLine: string[] = content.split('\n');

    let decryptedLines: string[] = contentByLine.map((line) => {
        return line.split('').filter((character, index) => index % 2 == 0).join('');
    })

    return decryptedLines.join('\n');
}

console.log(decryptDuplicates(readFile(sourceFile)));