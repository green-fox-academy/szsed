'use strict'

const fs = require('fs');

let content;

try{
content = fs.readFileSync('fruit.txt', 'utf-8');
}
catch (e){
    content = '';
}

console.log(typeof content);

console.log(content[0]);