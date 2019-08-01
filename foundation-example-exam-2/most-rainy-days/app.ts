'use strict';

import readContent from './readContent';
import countRainyDays from './countRainyDays';
import getMostRainyDays from './getMostRainyDays';

let fileName: string = 'example.csv';
let content: string = readContent(fileName);
let countedDays: Map<string, number> = countRainyDays(content);
let mostRainyDays: string = getMostRainyDays(countedDays);

console.log(mostRainyDays);

