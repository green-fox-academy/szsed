'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

let stepsCount: number = 20;
let stepsSize: number = 10;

ctx.fillStyle = "violet";

for(let i=0; i< stepsCount; i++){
    ctx.fillRect(i*10, i*10, stepsSize, stepsSize);
    ctx.strokeRect(i*10, i*10, stepsSize, stepsSize);
}