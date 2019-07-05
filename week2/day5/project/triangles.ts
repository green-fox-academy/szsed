'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


let startCoord: number[] = [canvas.width / 2, 0];
let numberOfRows: number = 10;
let sideLength: number = 20;
let triangleHeight: number = (3 ** 0.5) / 2 * sideLength;

let drawTriangle = (coordInner: number[]) => {

    ctx.beginPath();
    ctx.moveTo(coordInner[0], coordInner[1]);
    ctx.lineTo(coordInner[0] + sideLength / 2, coordInner[1] + triangleHeight;
    ctx.lineTo(coordInner[0] - sideLength / 2, coordInner[1] + triangleHeight);
    ctx.closePath();
    ctx.stroke();

}

let drawTriangleRows = () => {
    for (let i = 0; i < numberOfRows; i++) {
        for (let j = 0; j < i + 1; j++) {
            drawTriangle([startCoord[0] - i * sideLength / 2 + j * sideLength, startCoord[1] + i * triangleHeight]);
        }
    }
}

drawTriangleRows();
