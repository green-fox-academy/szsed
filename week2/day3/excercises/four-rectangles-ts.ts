'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

for (let i=0; i<4; i++){
let rgb:number = Math.floor(Math.random()*255);
let x:number = Math.floor(Math.random()*canvas.width/2);
let y:number = Math.floor(Math.random()*canvas.height/2);
let width:number = Math.floor(Math.random()*canvas.width/2);
let heigth:number = Math.floor(Math.random()*canvas.height/2);

ctx.fillStyle = `rgb(${rgb},${255-rgb},${rgb})`;
ctx.fillRect(x,y,width,heigth);
}