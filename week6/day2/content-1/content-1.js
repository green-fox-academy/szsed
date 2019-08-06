'use strict';

// 1)  Fill every paragraph with the last one's content.

// let contentArray = Array.from(document.getElementsByTagName('p'));
// let contentLast = contentArray[contentArray.length - 1].textContent;

// contentArray.forEach(element => element.textContent = contentLast);

// 2)  Do the same again, but you should keep the cat strong.

let contentArray = Array.from(document.getElementsByTagName('p'));
let contentLast = contentArray[contentArray.length - 1].innerHTML;

contentArray.forEach(element => element.innerHTML = contentLast);
