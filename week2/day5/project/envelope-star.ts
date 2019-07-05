'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// TODO: fix bottom-right area

let color: string = "green";

let lineDensityParameter = 20;


let drawlinesToVerticalAxis = (xCoord: number) => {

    let leftOfAxis: boolean = xCoord <= canvas.width /2;
    let axisIfSwitch: number = 1;

    leftOfAxis ? axisIfSwitch =1 : axisIfSwitch = -1;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xCoord, canvas.height/2);
    ctx.lineTo(canvas.width/2, axisIfSwitch*(canvas.height/2-xCoord));
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xCoord, canvas.height/2);
    ctx.lineTo(canvas.width/2, canvas.height/2+xCoord);
    ctx.stroke();

}

// drawlinesToVerticalAxis(50);

for (let i = 1; i < lineDensityParameter; i++) {
    drawlinesToVerticalAxis(i*lineDensityParameter);

}
