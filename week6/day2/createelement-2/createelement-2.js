'use strict';

// Remove the king from the list.

console.log(document.querySelector('.asteroids').children[0]);

document.querySelector('.asteroids').children[0].remove();

const planetData = [
    {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true,
    },
    {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false,
    },
    {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true,
    },
];

// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content. -->

for (let planet of planetData) {
    if (planet.asteroid) {
        let newAsteroid = document.createElement('li');
        newAsteroid.textContent = planet.content;
        newAsteroid.className = planet.category;
        document.querySelector('.asteroids').appendChild(newAsteroid);
    }
}
