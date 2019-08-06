'use strict';

// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.

let king = document.getElementById('b325').textContent;
console.log(king);

// 2. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
// console.log each of them.

let businessLampArray = Array.from(document.getElementsByClassName('asteroid big'));
let businessLamp = businessLampArray.map(element => element.textContent);
businessLamp.forEach(element => console.log(element));

// 3. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.

let conceitedKingArray = Array.from(document.getElementsByClassName('container')[0].children);
let conceitedKing = conceitedKingArray.map(element => element.textContent);
conceitedKing.forEach(element => alert(element));

// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.

let noBusiness = Array.from(document.querySelectorAll('div.asteroid')).map(element => element.textContent);
noBusiness.forEach(element => console.log(element));