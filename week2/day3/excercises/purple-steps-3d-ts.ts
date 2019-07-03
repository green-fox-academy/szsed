    
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

let stepsCount: number = 10;
let coord: number = 0;

ctx.fillStyle = "violet";

for(let i=0; i< stepsCount; i++){
    coord += i*10;
    ctx.fillRect(coord, coord, (i+1)*10, (i+1)*10);
    ctx.strokeRect(coord, coord, (i+1)*10, (i+1)*10);
}