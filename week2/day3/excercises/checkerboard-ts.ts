'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let sizeVar: number = 20;

for (let i=0; i<canvas.width/sizeVar; i++){
    for (let j=0; j<canvas.height/sizeVar; j++){
        if ((i+j) % 2 == 0){
            ctx.fillRect(i*sizeVar, j*sizeVar, sizeVar, sizeVar);
        }
    }
}