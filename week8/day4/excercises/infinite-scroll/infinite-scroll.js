'use strict';

// # Infinite scroll

// Implement the infinite scroll

// ## Preparation

// Render random amount of `<div>` elements into the body.

// - each of them must be 200px tall and 200px wide
// - each of them should have different random background color
// - the size must be set from a separated css file
// - the color can be set from JavaScript - with inline style

let amountOfDivs = Math.floor(Math.random() * 50) + 50;

// ## Exercises

// - Define an explicit global `scrollThreshold` variable number value (eg.: 300)
// - If the user scrolls down and reaches the `bottom - scrollThreshold` position:
//   - Append 10 new `<div>` to the body with the same size and with random
//     `background-color`
// - Make this infinite - so if the user scrolls down again, then render new
//   `<div>`-s again

const scrollThreshold = 20;

const addDivsBottom = (number) => {
    for (let i = 0; i < number; i++) {
        let newDiv = document.createElement('div');
        newDiv.style.backgroundColor = `hsl(${Math.floor(Math.random() * 255)}, 100%, 50%)`;
        document.body.appendChild(newDiv);
    }
}

const addDivsTop = (number) => {
    for (let i = 0; i < number; i++) {
        let newDiv = document.createElement('div');
        newDiv.style.backgroundColor = `hsl(${Math.floor(Math.random() * 255)}, 100%, 50%)`;
        document.body.insertBefore(newDiv, document.body.firstElementChild);
    }
}

addDivsBottom(amountOfDivs);

window.onscroll = () => {
    if (document.documentElement.scrollTop > (amountOfDivs - scrollThreshold) * 200) {
        addDivsBottom(10);
        amountOfDivs += 10;
    } else if (document.documentElement.scrollTop < scrollThreshold * 200) {
        addDivsTop(10);
        amountOfDivs += 10;
    }
}

// ## Optional

// Add the same effect when the user scrolls up.

// - When the user scrolls up and reaches the `top - scrollThreshold` position:
//   - Add new `<div>`-s to the top of the document