// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

'use strict'

let abc: string[] = ["Arthur", "Boe", "Chloe"];

let first: string = abc.shift();
let last: string = abc.pop();

abc.unshift(last);
abc.push(first);

console.log(abc);

