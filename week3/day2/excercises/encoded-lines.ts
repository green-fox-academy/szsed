// Create a method that decrypts encoded-lines.txt

const fs = require('fs');
const sourceFile: string = 'encoded-lines.txt';

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

let decryptEncoding = (content: string): string => {
    return content.split('\n').map((line) => {
        let decodedLine: string = '';
        for (let i: number = 0; i < line.length; i++) {
            if (line.charAt(i) == ' ') {
                decodedLine += ' ';
            } else if (line.charCodeAt(i) != 13) {
                decodedLine += String.fromCharCode(line.charCodeAt(i) - 1);
            }
        }

        return decodedLine;
    }).join('\n');
}

console.log(decryptEncoding(readFile(sourceFile)));