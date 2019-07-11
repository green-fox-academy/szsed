// Create a function that
// - takes the name of a CSV file as a parameter,
//   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happened.
//   - if there were multiple years with the same number of births then return any one of them

// You can find such a CSV file in this directory named births.csv
// If you pass "births.csv" to your function, then the result should be either 2006, or 2016.

'use strict';

const fs = require('fs');
const sourceFile: string = 'births.csv'

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

let contentByLine = (content: string): string[] => {
    return content.split('\n');
}

let getBirthDates = (content: string[]): string[] => {
    return content.map((value) => {
        let splitValues: string[] = value.split(';');
        return splitValues[1];
    });
}

let getBirthYearsSorted = (content: string[]): string[] => {
    return content.map((value) => value.slice(0,4)).sort();
}

let getBirthYearsWithCount = (content: string[]): any[] => {
    let yearsWithCount: [string, number][] = [];
    let remaining: number = content.length;
    while (remaining > 0){
        let year: string = content[remaining-1];
        let count: number = content.lastIndexOf(year) - content.indexOf(year) + 1;
        yearsWithCount.push([year, count]);
        remaining -= count;
    }
    return yearsWithCount.sort();
}

let printMaxValueAndCount = (content: any[]) => {
    let maxYear: number = 0;
    let maxValue: number = 0;

    content.forEach((value) => {
        if (value[1] > maxValue){
            maxValue = value[1];
            maxYear = value[0];
        }
    })

    console.log('Year with maximum number of entries:', maxYear);
    console.log('Maximum number of entries:', maxValue);

}

printMaxValueAndCount(getBirthYearsWithCount(getBirthYearsSorted(getBirthDates(contentByLine(readFile(sourceFile))))));