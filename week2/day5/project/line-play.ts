'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
let color1: string = "green";
let color2: string = "purple";

let lineDensityParameter = 20;

let canvasDivisionParameter: number = 1;

let drawLineAcrossTop = (startingPoint: number[], color: string) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startingPoint[0], startingPoint[1]);
    ctx.lineTo(canvas.width - startingPoint[1], startingPoint[0]);
    ctx.stroke();

}
let drawLineAcrossBottom = (startingPoint: number[], color: string) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startingPoint[0], startingPoint[1]);
    ctx.lineTo(startingPoint[1], canvas.height - startingPoint[0]);
    ctx.stroke();

}

for (let i=1; i<lineDensityParameter; i++)

{drawLineAcrossTop([i*canvas.width/lineDensityParameter, 0], color1);

drawLineAcrossBottom([0, i*canvas.height/lineDensityParameter], color2);}

// 1 XP Divide the canvas into 4/16/64 equal parts and repeat the line play pattern in each quarter


