'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.

let drawSquareFromSizeAndColor = (size: number, color: string) => {
    ctx.fillStyle = color;
    ctx.fillRect((canvas.width-size)/2,(canvas.height-size)/2,size,size)};

// Create a loop that fills the canvas with a rainbow of colored squares.

let colorsArray: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let numberOfColors: number = colorsArray.length;

for (let i=0; i < numberOfColors; i++){
    
    let sizeVar:number = canvas.height-i*canvas.height/numberOfColors;

    drawSquareFromSizeAndColor(sizeVar, colorsArray[i]);
}

