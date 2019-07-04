'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Rainbow from ellipse

let drawHalfEllipseFromRadiusesAndColor = (radius1: number, radius2:number, color: string) => {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.ellipse(canvas.width*3/2, canvas.height, radius1, radius2, 0, Math.PI/2, 0);
    ctx.stroke();
}


for (let i=0; i < 60; i++){
    
    let radiusVar1:number = canvas.width*3/2-i;
    let radiusVar2:number = canvas.height-i;
    let colorVar:string = `hsl(${i*4}, 100%, 50%)`;

    drawHalfEllipseFromRadiusesAndColor(radiusVar1, radiusVar2, colorVar);
}
