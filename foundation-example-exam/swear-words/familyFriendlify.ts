'use strict';

const fs = require('fs');

const familyFriendlify = (text: string, swearwords: string[]): number => {
    if (text == undefined) {
        return undefined;
    }

    let wordsRemoved: number = 0;
    let wordsArray: string[] = text.split(' ');

    for (let i: number = wordsArray.length - 1; i >= 0; i--) {
        swearwords.forEach((word) => {
            if (wordsArray[i].toLowerCase().indexOf(word.toLowerCase()) >= 0) {
                wordsRemoved++;
                console.log(wordsArray.splice(i, 1));
            }
        })
    }

    let niceText: string = wordsArray.join(' ');

    try {
        fs.writeFileSync('nicecontent.txt', niceText)
    } catch (error) {
        console.log(error.message);
    }

    return wordsRemoved;
}

export default familyFriendlify;