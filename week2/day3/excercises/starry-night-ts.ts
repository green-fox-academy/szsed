'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black

ctx.fillRect(0, 0, canvas.width, canvas.height);


//  - The stars should be small squares

let starSize: number = 5;
let starAmount: number = 100;
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

for (let i= 0; i< starAmount; i++){

    let x: number = Math.floor(Math.random()*canvas.width);
    let y: number = Math.floor(Math.random()*canvas.height);

    
    let rgbVar: number = Math.floor(Math.random()*255);
    let color: string = `rgb(${rgbVar},${rgbVar},${rgbVar})`
    ctx.fillStyle = color;
    
    ctx.fillRect(x,y,starSize, starSize);
}

