// Create a method that find the 5 most common lottery numbers in lottery.csv

const fs = require('fs');
const sourceFile: string = 'lottery.csv';

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

let mostCommonLotteryNumbers = (content: string): Map<string, number> => {
    let lotteryNumberMap = new Map<string, number>();

    content.split('\r').join('').split('\n').forEach((line) => {
        let lineElements: string[] = line.split(';');
        for (let i: number = lineElements.length - 1; i > lineElements.length - 6; i--) {
            if (lotteryNumberMap.has(lineElements[i])) {
                lotteryNumberMap.set(lineElements[i], lotteryNumberMap.get(lineElements[i]) + 1)
            } else {
                lotteryNumberMap.set(lineElements[i], 1);
            }
        }
    })

    lotteryNumberMap.forEach((count: number) => {
        lotteryNumberMap.forEach((count2: number, lotteryNumber2: string) => {
            if (count > count2 && lotteryNumberMap.size > 5) {
                lotteryNumberMap.delete(lotteryNumber2);
            }
        })
    })

    return lotteryNumberMap;
}

console.log(mostCommonLotteryNumbers(readFile(sourceFile)));