'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let color: string = "green";

let lineDensityParameter = 20;


let drawlinesToVerticalAxis = (xCoord: number) => {

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xCoord, canvas.height/2);
    ctx.lineTo(canvas.width/2, canvas.height/2-xCoord);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xCoord, canvas.height/2);
    ctx.lineTo(canvas.width/2, canvas.height/2+xCoord);
    ctx.stroke();

}

drawlinesToVerticalAxis(50);