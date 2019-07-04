'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

let containsSeven = (arr: number[]): string => {
    if (arr.includes(7)) {
        return "Hoorray";
    }
    else {
        return "Noooooo";
    }

}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

let containsSeven2 = (arr: number[]): string => {
    if (arr.indexOf(7) >= 0) {
        return "Hoorray";
    }
    else {
        return "Noooooo";
    }

}

const numbers2: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(containsSeven2(numbers2));


export = containsSeven;