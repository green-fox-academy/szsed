'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Rainbow from half-circles

let drawHalfCircleFromRadiusAndColor = (radius: number, color: string) => {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height, radius, 0, Math.PI, true);
    ctx.stroke();
}

for (let i=0; i < 60; i++){
    
    let radiusVar:number = canvas.width/2-i;
    let colorVar:string = `hsl(${i*4}, 100%, 50%)`;

    drawHalfCircleFromRadiusAndColor(radiusVar, colorVar);
}




