'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.

let drawSquareFromSize = (size: number) => ctx.fillRect((canvas.width-size)/2,(canvas.height-size)/2,size,size);

// Draw 3 squares with that function.
// Avoid code duplication.

ctx.fillStyle = "red";
drawSquareFromSize(200);
ctx.fillStyle = "orange";
drawSquareFromSize(125);
ctx.fillStyle = "yellow";
drawSquareFromSize(50);
