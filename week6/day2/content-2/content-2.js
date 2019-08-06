'use strict';

// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']

let contentList = ['apple', 'banana', 'cat', 'dog'];
document.querySelectorAll('li').forEach((element, index) => element.textContent = contentList[index]);

// 2) change the < ul > element's background color to 'limegreen'
//     - use css class to change the color instead of the style property

document.querySelector('ul').className = 'coloredUl';