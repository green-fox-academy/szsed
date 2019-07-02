'use strict';

// we are not exporting anything, leave us alone:
export{};

let single: string = 'single quotes';

let double: string = "double quotes";

let backTick: string = `string interpolation ${100 **2 -1}`;

console.log(single, double, backTick);

console.log(single.length);

console.log(single.toUpperCase());

function toUpperCaseAtIndex(text: string, index: number): string {
    let prefix: string = text.slice(0, index);

    let suffix: string = text.slice(index+1);

    let letter: string = text[index].toUpperCase();

// or concat
    return prefix + letter + suffix;
}

console.log(toUpperCaseAtIndex("appletree", 3));

let lettersOfWord: string[] = toUpperCaseAtIndex("appletree", 0).split("");

console.log(lettersOfWord);

let greeting: string = "hello create class";

// first match only
let greetingTheRightWay: string = greeting.replace("c", "C");

//regular expression, global, case insensitive
let greetingTheRightWay2: string = greeting.replace(/c/gi, "C");

console.log(greetingTheRightWay);
console.log(greetingTheRightWay2);

let textToSlice: string = "1234567890";

// from the end we DONT start from zero
let sliced: string = textToSlice.slice(4, -3);

console.log(sliced);