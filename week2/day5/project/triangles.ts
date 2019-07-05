'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


let startCoord: number [] = [canvas.width/2, 0];
let numberOfRows: number = 1;
let sideLength: number = 20;

let drawTriangle = (coordInner: number[]) =>{

    ctx.beginPath();
    ctx.moveTo(coordInner[0], coordInner[1]);
    ctx.lineTo(coordInner[0]+ sideLength/2, coordInner[1]+(3**0.5)/2* sideLength);
    ctx.lineTo(coordInner[0]- sideLength/2, coordInner[1]+(3**0.5)/2* sideLength);
    ctx.closePath();
    ctx.stroke();

}

drawTriangle(startCoord);