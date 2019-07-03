'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.

let lineToCenter = function(x:number, y:number) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();
};


// Fill the canvas with lines from the edges, every 20 px, to the center.

for (let i=0; i<=canvas.width/20; i++){
    for (let j=0; j<=canvas.height/20; j++){
        if (i == 0 || j == 0 || i == canvas.width/20 || j == canvas.height/20) {
            lineToCenter(i*20, j*20);
        }
    }
}