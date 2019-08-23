'use strict';

// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x
let candyCount = 0;
let lollipops = 0;
let rainFactor = 1;
let candyPerSecond = 0;

const candiesElem = document.querySelector('.candies');
const lollyElem = document.querySelector('.lollypops');
const speedElem = document.querySelector('.speed');

const displayCandies = () => {
    candiesElem.textContent = candyCount;
}

const displaySpeed = () => {
    speedElem.textContent = candyPerSecond;
}

const updateSpeed = () => {
    candyPerSecond = Math.floor(lollipops / 10) * rainFactor;
}

const candyGenerator = () => {
    candyCount += candyPerSecond;
    displayCandies();
}

const createCandy = () => {
    candyCount++;
    displayCandies();
}

const buyLollipop = () => {
    if (candyCount >= 100) {
        candyCount -= 100;
        lollipops++;
        lollyElem.textContent += '🍭';
        updateSpeed();
        displayCandies();
        displaySpeed();
    }
}

const candyMachine = () => {
    rainFactor *= 10;
    updateSpeed();
    displaySpeed();
}

document.body.addEventListener('click', (ev) => {
    switch (ev.target.className) {
        case 'create-candies':
            createCandy();
            break;
        case 'buy-lollypops':
            buyLollipop();
            break;
        case 'candy-machine':
            candyMachine();
            break;
    }
});

window.onload = () => setInterval(candyGenerator, 1000);