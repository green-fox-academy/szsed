'use strict';

// Write the image's url to the console.

console.log(document.querySelector('img').getAttribute('src'));

// Replace the image with a picture of your favorite animal.

document.querySelector('img').setAttribute('src', 'http://www.theslothinstitutecostarica.org/wp-content/uploads/2015/03/Unknown-5-300x300.jpeg')

// Make the link point to the Green Fox Academy website.

document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com/');

// Disable the second button.
// Replace its text with 'Don't click me!'.

document.querySelector('.this-one').disabled = true;
document.querySelector('.this-one').textContent = 'Don\'t click me!';
