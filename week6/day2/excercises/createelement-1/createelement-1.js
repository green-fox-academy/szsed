'use strict';

// Add an item that says 'The Green Fox' to the asteroid list.

let newAsteroid = document.createElement('li');
newAsteroid.textContent = 'The Green Fox';
newAsteroid.className = 'asteroid';
document.querySelector('.asteroids').appendChild(newAsteroid);

// Add an item that says 'The Lamplighter' to the asteroid list.

let newAsteroid2 = document.createElement('li');
newAsteroid2.textContent = 'The Lamplighter';
newAsteroid2.className = 'asteroid';
document.querySelector('.asteroids').appendChild(newAsteroid2);

// Add a heading saying 'I can add elements to the DOM!' to the.container.

let heading = document.createElement('h3');
heading.textContent = 'I can add elements to the DOM!';
document.querySelector('.container').appendChild(heading);

// Add an image, any image, to the container.

let image = document.createElement('img');
image.src = 'https://static.wixstatic.com/media/f4461b_83457ca5dd844c71a760d36e6583d0ff.png/v1/fill/w_168,h_168,al_c,usm_0.66_1.00_0.01/f4461b_83457ca5dd844c71a760d36e6583d0ff.png';
document.querySelector('.container').appendChild(image);
